
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../animations/AnimatedSection';
import VehicleCard from './VehicleCard';
import { Briefcase, Users, Sparkles } from 'lucide-react';

// Définition des données des véhicules
const professionalVehicles = [
  {
    id: 'corolla',
    name: 'Toyota Corolla',
    image: '/lovable-uploads/31ef3437-a258-48f6-a44e-8d29811cdd31.png',
    year: 2022,
    capacity: '5 personnes',
    consumption: '6,5L/100km',
    pricePerDay: 35000,
    description: 'Fiable et économique, idéale pour les déplacements professionnels en ville.',
    category: 'professional'
  },
  {
    id: 'accent',
    name: 'Hyundai Accent',
    image: '/lovable-uploads/4c07d363-cd42-4ef0-9948-c3fe2cbcd359.png',
    year: 2021,
    capacity: '5 personnes',
    consumption: '6L/100km',
    pricePerDay: 32000,
    description: 'Parfaite pour les trajets urbains, confortable et économique.',
    category: 'professional'
  }
];

const personalVehicles = [
  {
    id: 'rav4',
    name: 'Toyota RAV4',
    image: '/lovable-uploads/49104564-f560-4560-8c3d-4c2d46d84aa3.png',
    year: 2023,
    capacity: '5 personnes',
    consumption: '7,5L/100km',
    pricePerDay: 45000,
    description: 'SUV spacieux, idéal pour les familles et les routes difficiles.',
    category: 'personal'
  },
  {
    id: 'berline',
    name: 'Mercedes Classe C',
    image: '/lovable-uploads/d6261855-11fb-4198-b48e-3ca5f711151a.png',
    year: 2022,
    capacity: '5 personnes',
    consumption: '7L/100km',
    pricePerDay: 60000,
    description: 'Berline de luxe pour vos déplacements en toute élégance.',
    category: 'personal'
  }
];

const specialVehicles = [
  {
    id: 'hiace',
    name: 'Toyota Hiace',
    image: '/lovable-uploads/6d8c68a9-4769-4665-8e2f-98ecf681d23b.png',
    year: 2021,
    capacity: '12 personnes',
    consumption: '9L/100km',
    pricePerDay: 70000,
    description: 'Minibus idéal pour les groupes, événements ou transferts.',
    category: 'special'
  },
  {
    id: 'camry',
    name: 'Toyota Camry',
    image: '/lovable-uploads/4d8144cc-aca2-4b6a-a99d-269b62f7a9d7.png',
    year: 2023,
    capacity: '5 personnes',
    consumption: '7L/100km',
    pricePerDay: 55000,
    description: 'Voiture de prestige pour mariages, cérémonies et événements spéciaux.',
    category: 'special'
  }
];

// Tous les véhicules combinés
const allVehicles = [...professionalVehicles, ...personalVehicles, ...specialVehicles];

const VehicleCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section className="py-20" id="categories">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle 
            title="Notre flotte de véhicules" 
            subtitle="Découvrez nos véhicules adaptés à tous vos besoins de déplacement"
            centered
          />
        </AnimatedSection>

        <AnimatedSection>
          <Tabs defaultValue="all" className="w-full mt-8" onValueChange={setSelectedCategory}>
            <TabsList className="grid grid-cols-4 mb-8 w-full md:w-fit mx-auto">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="professional" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" /> Professionnels
              </TabsTrigger>
              <TabsTrigger value="personal" className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Particuliers
              </TabsTrigger>
              <TabsTrigger value="special" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Occasions spéciales
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="professional" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {professionalVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="personal" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {personalVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="special" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specialVehicles.map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VehicleCategories;
