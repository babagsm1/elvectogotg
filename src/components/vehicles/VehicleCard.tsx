
import { useState } from 'react';
import { Star, Calendar, Users, Fuel } from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedSection from '../animations/AnimatedSection';

export interface VehicleProps {
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
  const [isHovered, setIsHovered] = useState(false);
  
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  
  return (
    <AnimatedSection>
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <img 
            src={vehicle.image} 
            alt={vehicle.name} 
            className={cn(
              "w-full h-48 object-cover transition-transform duration-500",
              isHovered && "scale-105"
            )}
          />
          <div className="absolute top-0 right-0 bg-elvec-600 text-white text-xs px-2 py-1 m-2 rounded">
            {vehicle.category === 'professional' && 'Professionnel'}
            {vehicle.category === 'personal' && 'Personnel'}
            {vehicle.category === 'special' && 'Spécial'}
          </div>
        </div>
        
        <div className="p-5 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-elvec-900">{vehicle.name}</h3>
            <div className="flex items-center">
              <span className="text-yellow-500 flex">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 flex-grow">{vehicle.description}</p>
          
          <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1 text-elvec-500" />
              <span>{vehicle.year}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="h-4 w-4 mr-1 text-elvec-500" />
              <span>{vehicle.capacity}</span>
            </div>
            <div className="flex items-center text-gray-600 col-span-2">
              <Fuel className="h-4 w-4 mr-1 text-elvec-500" />
              <span>{vehicle.consumption}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
            <span className="text-elvec-900 font-bold">{formatPrice(vehicle.pricePerDay)} FCFA<span className="text-xs text-gray-500 font-normal">/jour</span></span>
            <button className="bg-elvec-600 hover:bg-elvec-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-300">
              Réserver
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default VehicleCard;
