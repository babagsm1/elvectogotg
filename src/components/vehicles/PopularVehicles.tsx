
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
      image: 'https://images.unsplash.com/photo-1628277613967-6abca504d0ac?q=80&w=2070&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=2067&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1614106764087-719038e91211?q=80&w=2070&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1625595234377-0458f8a282a3?q=80&w=2071&auto=format&fit=crop',
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
