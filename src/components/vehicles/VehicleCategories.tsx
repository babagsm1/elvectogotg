
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
    image: '/lovable-uploads/1bd720bd-9635-455f-8849-f89512705c25.png',
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
    image: '/lovable-uploads/4626bded-4c99-437a-9422-17d3088248d2.png',
    year: 2021,
    capacity: '5 personnes',
    consumption: '6L/100km',
    pricePerDay: 32000,
    description: 'Parfaite pour les trajets urbains, confortable et économique.',
    category: 'professional'
  },
  {
    id: 'yaris',
    name: 'Toyota Yaris',
    image: '/lovable-uploads/b0b5b198-37ad-4d34-bee4-11b451fc3baf.png',
    year: 2023,
    capacity: '5 personnes',
    consumption: '5,8L/100km',
    pricePerDay: 30000,
    description: 'Compacte et agile, parfaite pour la circulation en ville à Lomé.',
    category: 'professional'
  },
  {
    id: 'santafe',
    name: 'Hyundai Santa Fe',
    image: '/lovable-uploads/cc256fb8-05f3-4982-bdb2-6413414b3db1.png',
    year: 2022,
    capacity: '7 personnes',
    consumption: '8L/100km',
    pricePerDay: 45000,
    description: 'SUV familial spacieux, idéal pour les déplacements professionnels en groupe.',
    category: 'professional'
  }
];

const personalVehicles = [
  {
    id: 'rav4',
    name: 'Toyota RAV4',
    image: '/lovable-uploads/ade690af-5162-4fb8-81bc-ad73019fb184.png',
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
    image: '/lovable-uploads/be68f8ac-818b-4b8a-ac6a-6f693ecd76b5.png',
    year: 2022,
    capacity: '5 personnes',
    consumption: '7L/100km',
    pricePerDay: 60000,
    description: 'Berline de luxe pour vos déplacements en toute élégance.',
    category: 'personal'
  },
  {
    id: 'land-cruiser',
    name: 'Toyota Land Cruiser Prado',
    image: '/lovable-uploads/2b8380f1-7282-4343-a0a8-40704b599087.png',
    year: 2023,
    capacity: '7 personnes',
    consumption: '9L/100km',
    pricePerDay: 70000,
    description: 'SUV de luxe tout-terrain, parfait pour explorer les régions autour de Lomé.',
    category: 'personal'
  },
  {
    id: 'highlander',
    name: 'Toyota Highlander',
    image: '/lovable-uploads/d821c0ba-bf70-4f75-8546-dbc64980905b.png',
    year: 2022,
    capacity: '7 personnes',
    consumption: '8,5L/100km',
    pricePerDay: 65000,
    description: 'Véhicule familial spacieux avec tout le confort nécessaire pour vos voyages.',
    category: 'personal'
  }
];

const specialVehicles = [
  {
    id: 'hiace',
    name: 'Toyota Hiace',
    image: '/lovable-uploads/5849e000-e611-4774-9d9e-c823996b8d14.png',
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
    image: '/lovable-uploads/fa46f65b-f983-4a81-b8cc-895c85f987b3.png',
    year: 2023,
    capacity: '5 personnes',
    consumption: '7L/100km',
    pricePerDay: 55000,
    description: 'Voiture de prestige pour mariages, cérémonies et événements spéciaux.',
    category: 'special'
  },
  {
    id: 'coaster',
    name: 'Toyota Coaster',
    image: '/lovable-uploads/fd32ce98-bc15-4647-b1ee-60c4b33e951c.png',
    year: 2022,
    capacity: '30 personnes',
    consumption: '12L/100km',
    pricePerDay: 120000,
    description: 'Autobus pour grands groupes, idéal pour les transferts d\'aéroport ou excursions.',
    category: 'special'
  },
  {
    id: 'lexus',
    name: 'Lexus ES 350',
    image: '/lovable-uploads/be68f8ac-818b-4b8a-ac6a-6f693ecd76b5.png',
    year: 2023,
    capacity: '5 personnes',
    consumption: '8L/100km',
    pricePerDay: 80000,
    description: 'Berline de luxe pour vos déplacements VIP, mariages et occasions spéciales.',
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
