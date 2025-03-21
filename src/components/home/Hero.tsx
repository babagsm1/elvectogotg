
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-elvec-900 to-elvec-800 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" 
        style={{ 
          backgroundImage: `url('/lovable-uploads/3aaad69c-814d-462a-ab01-06627373c60d.png')` 
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1 bg-elvec-500 text-white text-sm font-medium rounded-full mb-6 animate-pulse">
            N°1 au Togo dans la location d'engins lourds
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
            Entreprise de Location <br className="hidden md:block" />
            d'Engins Lourds <span className="text-elvec-400">Professionnelle</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up">
            Nous proposons une large gamme d'engins lourds à la location, ainsi que des services de location de voitures avec chauffeur de qualité exceptionnelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Link to="/services">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Nos Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                Contactez-nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-elvec-900/70 to-transparent"></div>
    </section>
  );
};

export default Hero;
