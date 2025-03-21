
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import AnimatedSection from '../animations/AnimatedSection';

const EquipmentRental = () => {
  const benefits = [
    "Flotte d'engins modernes et bien entretenus",
    "Conducteurs professionnels et expérimentés",
    "Service client réactif et disponible",
    "Tarifs compétitifs et transparents",
    "Solutions sur mesure pour chaque projet"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <AnimatedSection>
              <SectionTitle 
                title="Service de Location d'Engins Lourds" 
                subtitle="Découvrez nos différents engins pour vos travaux."
                className="lg:text-left"
              />
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-elvec-600 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 mb-8">
                Notre service de location d'engins lourds propose une solution fiable et efficace pour tous vos besoins en chantier. Nous mettons à votre disposition une flotte d'engins modernes et puissants pour garantir la réussite de vos projets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Réserver maintenant
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="w-full sm:w-auto">
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="w-full lg:w-1/2">
            <AnimatedSection animationType="slide-right">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ade690af-5162-4fb8-81bc-ad73019fb184.png" 
                  alt="Engin de chantier" 
                  className="rounded-lg shadow-lg w-full object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-elvec-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="text-xl font-bold">Équipements de qualité</p>
                  <p className="text-sm">Pour tous vos travaux de chantier</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentRental;
