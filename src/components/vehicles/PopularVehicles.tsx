
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import VehicleCard from './VehicleCard';
import Button from '../common/Button';
import AnimatedSection from '../animations/AnimatedSection';
import { Link } from 'react-router-dom';

const PopularVehicles = () => {
  const popularVehicles = [
    {
      id: '1',
      name: 'Toyota Corolla',
      category: 'professional',
      description: 'Idéale pour les déplacements professionnels en ville, fiable et économique.',
      pricePerDay: 40000,
      image: '/lovable-uploads/1bd720bd-9635-455f-8849-f89512705c25.png',
      year: 2022,
      capacity: '5 personnes',
      consumption: '6L/100km',
    },
    {
      id: '2',
      name: 'Hyundai Accent',
      category: 'professional',
      description: 'Confortable et économique, parfaite pour tous vos déplacements urbains.',
      pricePerDay: 35000,
      image: '/lovable-uploads/4626bded-4c99-437a-9422-17d3088248d2.png',
      year: 2021,
      capacity: '5 personnes',
      consumption: '5.5L/100km',
    },
    {
      id: '3',
      name: 'Toyota RAV4',
      category: 'personal',
      description: 'SUV polyvalent idéal pour les routes difficiles et les déplacements en famille.',
      pricePerDay: 60000,
      image: '/lovable-uploads/ade690af-5162-4fb8-81bc-ad73019fb184.png',
      year: 2023,
      capacity: '5 personnes',
      consumption: '7.5L/100km',
    },
    {
      id: '4',
      name: 'Toyota Hiace',
      category: 'special',
      description: 'Parfait pour les groupes et les événements spéciaux, spacieux et confortable.',
      pricePerDay: 80000,
      image: '/lovable-uploads/5849e000-e611-4774-9d9e-c823996b8d14.png',
      year: 2021,
      capacity: '12 personnes',
      consumption: '9L/100km',
    },
    {
      id: '5',
      name: 'Mercedes Classe C',
      category: 'personal',
      description: 'Berline de luxe pour vos déplacements VIP en toute élégance dans Lomé.',
      pricePerDay: 65000,
      image: '/lovable-uploads/be68f8ac-818b-4b8a-ac6a-6f693ecd76b5.png',
      year: 2022,
      capacity: '5 personnes',
      consumption: '7L/100km',
    },
    {
      id: '6',
      name: 'Toyota Land Cruiser',
      category: 'personal',
      description: 'SUV robuste pour explorer les environs de Lomé et les pistes difficiles.',
      pricePerDay: 90000,
      image: '/lovable-uploads/2b8380f1-7282-4343-a0a8-40704b599087.png',
      year: 2023,
      capacity: '7 personnes',
      consumption: '10L/100km',
    },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {popularVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/vehicules">
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
