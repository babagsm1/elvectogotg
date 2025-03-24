
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import AnimatedSection from '../animations/AnimatedSection';

interface VehicleReservationProps {
  quoteDialogOpen: boolean;
  setQuoteDialogOpen: (open: boolean) => void;
}

const VehicleReservation = ({ quoteDialogOpen, setQuoteDialogOpen }: VehicleReservationProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-elvec-900 to-elvec-800 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <AnimatedSection>
                <SectionTitle 
                  title="Réservez votre véhicule" 
                  subtitle="Simple, rapide et fiable"
                  className="text-white"
                />
                
                <div className="mt-8 space-y-6">
                  <p className="text-white/80">
                    Besoin d'un véhicule pour vos déplacements professionnels à Lomé ? 
                    Nous proposons des véhicules adaptés à tous vos besoins avec un 
                    service client exceptionnel.
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      "Réservation simple et rapide",
                      "Véhicules entretenus régulièrement",
                      "Assistance 24h/24 et 7j/7",
                      "Livraison possible à votre hôtel ou à l'aéroport",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-white/20 p-1 rounded-full mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <Button 
                      className="bg-white text-elvec-800 hover:bg-gray-100"
                      size="lg"
                      onClick={() => setQuoteDialogOpen(true)}
                    >
                      Demander un devis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="relative hidden lg:block">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url('/lovable-uploads/b98648ec-2fca-4e83-b746-d48ad9686764.png')` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleReservation;
