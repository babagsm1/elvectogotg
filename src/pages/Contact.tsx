
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/common/ContactForm';
import AnimatedSection from '../components/animations/AnimatedSection';

const Contact = () => {
  return (
    <Layout>
      <div className="bg-elvec-50 py-10">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle 
              title="Contact"
              centered
            />
          </AnimatedSection>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h3 className="text-2xl font-semibold mb-6 text-elvec-900">Informations de contact</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-elvec-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500">Email</h4>
                      <a href="mailto:contact@elvectogo.com" className="text-base text-gray-900 hover:text-elvec-600 transition-colors duration-300">
                        contact@elvectogo.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-elvec-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500">Téléphone</h4>
                      <p className="text-base text-gray-900">
                        <a href="tel:+22870600306" className="hover:text-elvec-600 transition-colors duration-300">+228 70 60 03 06</a>
                      </p>
                      <p className="text-base text-gray-900">
                        <a href="tel:+22892748270" className="hover:text-elvec-600 transition-colors duration-300">+228 92 74 82 70</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-elvec-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500">Bureau</h4>
                      <p className="text-base text-gray-900">
                        Adidogomé sagbado dans le von de la Pharmacie Actuelle en allant vers le marché adidogomé, Lomé, Togo
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-elvec-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-500">Horaires d'Ouverture</h4>
                      <p className="text-base text-gray-900">Lun - Ven: 8h00 - 18h00</p>
                      <p className="text-base text-gray-900">Sam: 8h00 - 13h00</p>
                      <p className="text-base text-gray-900">Dim: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide-right">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-elvec-900">Formulaire de contact</h3>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31767.789057610985!2d1.1464791!3d6.1731309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e1c113185cf1%3A0x8898cc09bc6ebb4e!2sLom%C3%A9%2C%20Togo!5e0!3m2!1sfr!2s!4v1650464744985!5m2!1sfr!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="ELVEC-TOGO location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
