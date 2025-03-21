
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedSection from '../components/animations/AnimatedSection';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Images pour la galerie
  const galleryItems = [
    {
      id: 1,
      title: 'Tranchée des câbles',
      category: 'tranchee',
      image: '/lovable-uploads/3aaad69c-814d-462a-ab01-06627373c60d.png'
    },
    {
      id: 2,
      title: 'Manutention',
      category: 'manutention',
      image: '/lovable-uploads/b0b5b198-37ad-4d34-bee4-11b451fc3baf.png'
    },
    {
      id: 3,
      title: 'Fondation',
      category: 'fondation',
      image: '/lovable-uploads/fd32ce98-bc15-4647-b1ee-60c4b33e951c.png'
    },
    {
      id: 4,
      title: 'Terrassement',
      category: 'terrassement',
      image: '/lovable-uploads/49979eec-46cf-4088-accc-e6efe6aad1df.png'
    },
    {
      id: 5,
      title: 'Rétention d\'eau',
      category: 'retention',
      image: '/lovable-uploads/3aaad69c-814d-462a-ab01-06627373c60d.png'
    },
    {
      id: 6,
      title: 'Aménagement',
      category: 'amenagement',
      image: '/lovable-uploads/b0b5b198-37ad-4d34-bee4-11b451fc3baf.png'
    },
    {
      id: 7,
      title: 'Terrassement 2',
      category: 'terrassement',
      image: '/lovable-uploads/fd32ce98-bc15-4647-b1ee-60c4b33e951c.png'
    },
    {
      id: 8,
      title: 'Dessouchage',
      category: 'dessouchage',
      image: '/lovable-uploads/49979eec-46cf-4088-accc-e6efe6aad1df.png'
    },
    {
      id: 9,
      title: 'Reprofilage',
      category: 'reprofilage',
      image: '/lovable-uploads/3aaad69c-814d-462a-ab01-06627373c60d.png'
    }
  ];
  
  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'tranchee', name: 'Tranchée' },
    { id: 'manutention', name: 'Manutention' },
    { id: 'fondation', name: 'Fondation' },
    { id: 'terrassement', name: 'Terrassement' },
    { id: 'amenagement', name: 'Aménagement' }
  ];
  
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);
  
  return (
    <Layout>
      <div className="bg-elvec-900 text-white py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Notre Galerie</h1>
              <p className="text-xl text-gray-300">
                Découvrez nos différents projets et réalisations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle 
              title="Galerie De Nos Réalisations" 
              subtitle="Rencontrez les membres clés de notre équipe."
              centered
            />
            
            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-elvec-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Galerie d'images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 100} animationType="fade-in">
                <div className="group relative overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-w-4 aspect-h-3">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-elvec-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-white/80 mt-1">
                      Cliquez pour plus de détails
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
