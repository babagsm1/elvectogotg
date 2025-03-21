
import { Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../animations/AnimatedSection';

const PopularVehicles = () => {
  // Données des véhicules populaires
  const popularVehicles = [
    {
      name: 'Toyota Corolla',
      image: '/lovable-uploads/31ef3437-a258-48f6-a44e-8d29811cdd31.png',
      description: 'Fiable, économique, idéale pour les professionnels.',
      features: ['Consommation réduite', 'Entretien facile', 'Climatisation', 'Bluetooth']
    },
    {
      name: 'Hyundai Accent',
      image: '/lovable-uploads/4c07d363-cd42-4ef0-9948-c3fe2cbcd359.png',
      description: 'Parfaite pour les trajets urbains à Lomé.',
      features: ['Maniable en ville', 'Économique', 'Confortable', 'Fiable']
    },
    {
      name: 'Toyota RAV4',
      image: '/lovable-uploads/49104564-f560-4560-8c3d-4c2d46d84aa3.png',
      description: 'SUV pratique pour les familles et routes difficiles.',
      features: ['Spacieux', 'Polyvalent', 'Sécuritaire', 'Robuste']
    },
    {
      name: 'Toyota Hiace',
      image: '/lovable-uploads/6d8c68a9-4769-4665-8e2f-98ecf681d23b.png',
      description: 'Minibus idéal pour les groupes ou événements.',
      features: ['Grande capacité', 'Confortable', 'Climatisé', 'Spacieux']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle 
            title="Véhicules populaires à Lomé" 
            subtitle="Découvrez les véhicules les plus demandés par nos clients à Lomé"
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {popularVehicles.map((vehicle, index) => (
            <AnimatedSection key={vehicle.name} delay={index * 100}>
              <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="md:w-2/5">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold">{vehicle.name}</h3>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-elvec-600 rounded-full mr-2"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="#reservation" 
                    className="inline-block mt-4 text-elvec-600 font-medium hover:text-elvec-800 hover:underline"
                  >
                    Réserver maintenant →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularVehicles;
