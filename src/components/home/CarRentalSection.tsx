
import { Car, CheckCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import AnimatedSection from '../animations/AnimatedSection';

const CarRentalSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle 
            title="La location de voitures avec chauffeur simplifiée" 
            subtitle="Découvrez les avantages de la location de voitures avec chauffeur et profitez d'un service pratique et fiable."
            centered
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/31ef3437-a258-48f6-a44e-8d29811cdd31.png" 
                alt="Location de voitures avec chauffeur" 
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="slide-right">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Que vous ayez besoin d'un véhicule pour vos déplacements professionnels ou personnels, notre entreprise vous offre une solution adaptée à vos besoins.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-elvec-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-elvec-100 rounded-full flex items-center justify-center text-elvec-600 mb-4">
                    <Car className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Confort</h3>
                  <p className="text-gray-600">Profitez d'un confort optimal et laissez-vous conduire par nos chauffeurs professionnels.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-elvec-200 transition-all duration-300">
                  <div className="w-12 h-12 bg-elvec-100 rounded-full flex items-center justify-center text-elvec-600 mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
                  <p className="text-gray-600">Bénéficiez d'une grande flexibilité dans vos déplacements grâce à nos chauffeurs.</p>
                </div>
              </div>
              
              <ul className="space-y-2 mt-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-elvec-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Véhicules récents et bien entretenus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-elvec-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Chauffeurs professionnels et ponctuels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-elvec-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Service disponible 7j/7 sur réservation</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/vehicules">
                  <Button>
                    Réserver une voiture
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CarRentalSection;
