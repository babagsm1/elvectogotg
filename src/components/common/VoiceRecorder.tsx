
import { useState, useRef } from 'react';
import { Mic, MicOff, Send, StopCircle } from 'lucide-react';
import Button from './Button';
import { toast } from 'sonner';

interface VoiceRecorderProps {
  onVoiceMessageReady: (audioBlob: Blob) => void;
}

const VoiceRecorder = ({ onVoiceMessageReady }: VoiceRecorderProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);
  const timerRef = useRef<number | null>(null);
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioBlob(audioBlob);
        
        // Stop all audio tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      
      // Start timer for recording duration
      setRecordingDuration(0);
      timerRef.current = window.setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);
      
      toast.info("Enregistrement démarré. Parlez maintenant...");
    } catch (error) {
      console.error("Erreur lors de l'accès au microphone:", error);
      toast.error("Impossible d'accéder au microphone. Vérifiez les permissions de votre navigateur.");
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      
      toast.success("Enregistrement terminé!");
    }
  };
  
  const sendVoiceMessage = () => {
    if (audioBlob) {
      onVoiceMessageReady(audioBlob);
      setAudioBlob(null);
      toast.success("Message vocal envoyé avec succès!");
    }
  };
  
  const cancelRecording = () => {
    setIsRecording(false);
    setAudioBlob(null);
    
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    setRecordingDuration(0);
  };
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="mt-2">
      {!isRecording && !audioBlob ? (
        <Button 
          type="button" 
          onClick={startRecording}
          variant="secondary"
          className="flex items-center"
        >
          <Mic className="h-5 w-5 mr-2" />
          Enregistrer un message vocal
        </Button>
      ) : isRecording ? (
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-gray-100 p-3 rounded-lg flex items-center">
            <MicOff className="h-5 w-5 text-red-500 animate-pulse mr-2" />
            <span className="text-gray-700">Enregistrement en cours: {formatTime(recordingDuration)}</span>
          </div>
          <Button
            type="button"
            onClick={stopRecording}
            variant="outline"
            className="bg-red-50 border-red-300 text-red-700 hover:bg-red-100"
          >
            <StopCircle className="h-5 w-5" />
          </Button>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-green-50 p-3 rounded-lg flex items-center">
            <span className="text-green-700">Message vocal prêt à être envoyé</span>
          </div>
          <Button 
            type="button" 
            onClick={sendVoiceMessage}
            variant="primary"
          >
            <Send className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            onClick={cancelRecording}
            variant="outline"
            className="border-gray-300"
          >
            Annuler
          </Button>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
