
import { useState } from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';
import Button from './Button';
import { toast } from "@/components/ui/sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler une soumission de formulaire
    setTimeout(() => {
      toast.success("Votre message a été envoyé avec succès!");
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
          Nom
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
            required
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-elvec-500 focus:border-elvec-500 block w-full pl-10 p-2.5"
            placeholder="votre@email.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
          Téléphone
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
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-elvec-500 focus:border-elvec-500 block w-full pl-10 p-2.5"
            placeholder="+228 XX XX XX XX"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
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
            required
            rows={4}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-elvec-500 focus:border-elvec-500 block w-full pl-10 p-2.5"
            placeholder="Votre message"
          ></textarea>
        </div>
      </div>
      
      <div>
        <Button 
          type="submit" 
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
