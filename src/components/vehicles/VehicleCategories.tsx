
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
    image: '/lovable-uploads/13acb3a4-4d2b-421b-8e6d-478f9122ef67.png',
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
    image: '/lovable-uploads/bc5ed72f-f751-490b-88b9-48c64f6fa3ac.png',
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
    image: '/lovable-uploads/c8fb8643-31fc-45dc-9614-1f524c33c251.png',
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
    image: '/lovable-uploads/5bfcb2f5-6d2c-4163-ae35-9f65defdfd4e.png',
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
    image: '/lovable-uploads/316acab7-c2b2-49c4-8df2-5a2dc5e26718.png',
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
    image: '/lovable-uploads/93b75f76-66b8-4cba-a284-6d6f97559d7e.png',
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
