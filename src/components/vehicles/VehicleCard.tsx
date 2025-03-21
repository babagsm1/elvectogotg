
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Fuel, Info } from 'lucide-react';
import Button from '../common/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface VehicleProps {
  vehicle: {
    id: string;
    name: string;
    image: string;
    year: number;
    capacity: string;
    consumption: string;
    pricePerDay: number;
    description: string;
    category: string;
  };
}

const VehicleCard = ({ vehicle }: VehicleProps) => {
  const [showDetails, setShowDetails] = useState(false);

  // Format du prix avec séparateur de milliers
  const formattedPrice = vehicle.pricePerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-60 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-elvec-600 text-white px-3 py-1 text-sm font-medium">
          {vehicle.category === 'professional' ? 'Professionnel' : 
           vehicle.category === 'personal' ? 'Particulier' : 'Spécial'}
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{vehicle.name}</CardTitle>
          <div className="text-elvec-600 font-bold">{formattedPrice} FCFA<span className="text-sm font-normal text-gray-500">/jour</span></div>
        </div>
        <CardDescription>Année {vehicle.year}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm">
            <Users className="mr-2 h-4 w-4 text-elvec-600" />
            <span>{vehicle.capacity}</span>
          </div>
          <div className="flex items-center text-sm">
            <Fuel className="mr-2 h-4 w-4 text-elvec-600" />
            <span>{vehicle.consumption}</span>
          </div>
        </div>
        
        <p className="mt-4 text-sm text-gray-600">{vehicle.description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center">
              <Info className="mr-1 h-4 w-4" /> Détails
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-bold">Caractéristiques:</h4>
              <ul className="text-sm space-y-1">
                <li>• Air conditionné</li>
                <li>• Système audio Bluetooth</li>
                <li>• Kilométrage illimité</li>
                <li>• Assurance incluse</li>
              </ul>
              <p className="text-sm mt-2">Chauffeur disponible avec supplément</p>
            </div>
          </PopoverContent>
        </Popover>
        
        <a href="#reservation" 
          onClick={() => {
            const reservationSelect = document.getElementById('vehicle-select');
            if (reservationSelect) {
              (reservationSelect as HTMLSelectElement).value = vehicle.id;
            }
          }}
        >
          <Button className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" /> Réserver
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
