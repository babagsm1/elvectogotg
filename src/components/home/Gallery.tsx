
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import AnimatedSection from '../animations/AnimatedSection';

const Gallery = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Tranchée des câbles',
      image: '/lovable-uploads/3aaad69c-814d-462a-ab01-06627373c60d.png'
    },
    {
      id: 2,
      title: 'Manutention',
      image: '/lovable-uploads/b0b5b198-37ad-4d34-bee4-11b451fc3baf.png'
    },
    {
      id: 3,
      title: 'Fondation',
      image: '/lovable-uploads/fd32ce98-bc15-4647-b1ee-60c4b33e951c.png'
    },
    {
      id: 4,
      title: 'Terrassement',
      image: '/lovable-uploads/49979eec-46cf-4088-accc-e6efe6aad1df.png'
    }
  ];

  return (
    <section className="py-20 bg-elvec-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle 
            title="Galerie de nos Réalisations" 
            subtitle="Découvrez quelques-uns de nos projets récents et l'expertise de notre équipe."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 100} animationType="slide-up">
              <div 
                className="relative overflow-hidden rounded-lg shadow-md group"
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t from-elvec-900/90 via-elvec-900/40 to-transparent transition-opacity duration-300 ${isHovered === item.id ? 'opacity-100' : 'opacity-70'}`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {isHovered === item.id && (
                    <p className="mt-2 text-sm text-white/80 transform transition-all duration-300 opacity-100 translate-y-0">
                      Cliquez pour voir plus de détails sur ce projet
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/galerie">
            <Button>
              Explorer toute la galerie
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
