
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
        <div className="bg-gradient-to-r from-amber-800 to-amber-700 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <AnimatedSection>
                <SectionTitle 
                  title="Réservez votre véhicule" 
                  subtitle="Simple, rapide et fiable"
                  className="text-white"
                />
                
                <div className="mt-8 space-y-6">
                  <p className="text-white/90">
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
                        <span className="bg-white/30 p-1 rounded-full mr-3 mt-1">
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
                      className="bg-white text-amber-800 hover:bg-gray-100"
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
            
            <div className="relative hidden lg:flex items-center justify-center bg-amber-800">
              <div className="p-10 relative z-10">
                <img 
                  src="/lovable-uploads/4626bded-4c99-437a-9422-17d3088248d2.png" 
                  alt="Logo EL VEC" 
                  className="w-full max-w-xs mx-auto object-contain animate-pulse"
                />
              </div>
              <div className="absolute inset-0 opacity-10 bg-pattern-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleReservation;
