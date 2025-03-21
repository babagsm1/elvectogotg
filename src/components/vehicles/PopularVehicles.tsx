
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import VehicleCard from './VehicleCard';
import Button from '../common/Button';
import AnimatedSection from '../animations/AnimatedSection';
import { Link } from 'react-router-dom';

const PopularVehicles = () => {
  const popularVehicles = [
    {
      id: 1,
      name: 'Toyota Corolla',
      category: 'Berline',
      description: 'Idéale pour les déplacements professionnels en ville, fiable et économique.',
      price: 40000, // Prix par jour en FCFA
      image: '/lovable-uploads/88be6baf-5d76-4716-a490-0e7d088f52c1.png',
      features: ['5 places', 'Climatisation', 'Bluetooth', 'Consommation : 6L/100km'],
    },
    {
      id: 2,
      name: 'Hyundai Accent',
      category: 'Berline',
      description: 'Confortable et économique, parfaite pour tous vos déplacements urbains.',
      price: 35000, // Prix par jour en FCFA
      image: '/lovable-uploads/75348329-b44b-4869-92a9-c4c86585eae2.png',
      features: ['5 places', 'Climatisation', 'Radio USB', 'Consommation : 5.5L/100km'],
    },
    {
      id: 3,
      name: 'Toyota RAV4',
      category: 'SUV',
      description: 'SUV polyvalent idéal pour les routes difficiles et les déplacements en famille.',
      price: 60000, // Prix par jour en FCFA
      image: '/lovable-uploads/a66d0727-cac4-4424-ad2b-1703cc5faf65.png',
      features: ['5 places', 'Climatisation', 'GPS intégré', 'Consommation : 7.5L/100km'],
    },
    {
      id: 4,
      name: 'Toyota Hiace',
      category: 'Minibus',
      description: 'Parfait pour les groupes et les événements spéciaux, spacieux et confortable.',
      price: 80000, // Prix par jour en FCFA
      image: '/lovable-uploads/88be6baf-5d76-4716-a490-0e7d088f52c1.png',
      features: ['12 places', 'Climatisation', 'Radio', 'Consommation : 9L/100km'],
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle 
            title="Nos Véhicules Populaires" 
            subtitle="Découvrez notre sélection de véhicules les plus demandés à Lomé"
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {popularVehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="primary" className="inline-flex items-center">
              Voir tous nos véhicules
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularVehicles;
