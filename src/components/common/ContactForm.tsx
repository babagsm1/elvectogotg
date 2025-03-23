
import { useState } from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';
import Button from './Button';
import { toast } from "sonner";
import VoiceRecorder from './VoiceRecorder';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasVoiceMessage, setHasVoiceMessage] = useState(false);
  const [voiceMessageBlob, setVoiceMessageBlob] = useState<Blob | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleVoiceMessageReady = (audioBlob: Blob) => {
    setVoiceMessageBlob(audioBlob);
    setHasVoiceMessage(true);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields (name and phone number only)
    if (!formData.nom.trim()) {
      toast.error("Veuillez fournir votre nom");
      return;
    }
    
    if (!formData.telephone.trim()) {
      toast.error("Veuillez fournir votre numéro de téléphone");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission with voice message if provided
    setTimeout(() => {
      if (hasVoiceMessage && voiceMessageBlob) {
        console.log("Message vocal à envoyer:", voiceMessageBlob);
        // Here you would normally upload the audio blob to a server
      }
      
      toast.success("Votre message a été envoyé avec succès!");
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        message: ''
      });
      setHasVoiceMessage(false);
      setVoiceMessageBlob(null);
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
          Nom <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-elvec-500 focus:border-elvec-500 block w-full pl-10 p-2.5"
            placeholder="Votre nom"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-elvec-500 focus:border-elvec-500 block w-full pl-10 p-2.5"
            placeholder="votre@email.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
          Téléphone <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-elvec-500 focus:border-elvec-500 block w-full pl-10 p-2.5"
            placeholder="+228 XX XX XX XX"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message écrit
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MessageSquare className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-elvec-500 focus:border-elvec-500 block w-full pl-10 p-2.5"
            placeholder="Votre message (ou utilisez l'option d'enregistrement audio ci-dessous)"
          ></textarea>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <div className="text-sm font-medium text-gray-700 mb-3">
          Ou laissez un message vocal
        </div>
        
        <VoiceRecorder onVoiceMessageReady={handleVoiceMessageReady} />
        
        {hasVoiceMessage && (
          <div className="mt-3 p-3 bg-green-50 text-green-700 rounded-md text-sm">
            Message vocal enregistré avec succès et prêt à être envoyé!
          </div>
        )}
      </div>
      
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>
        <p className="mt-2 text-xs text-gray-500">
          <span className="text-red-500">*</span> Champs obligatoires
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
