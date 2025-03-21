
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedSection from '../components/animations/AnimatedSection';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Images pour la galerie avec les nouvelles images
  const galleryItems = [
    {
      id: 1,
      title: 'Excavation',
      category: 'excavation',
      image: '/lovable-uploads/f7ba1d62-eae3-4d1d-be31-64d8282a9c53.png'
    },
    {
      id: 2,
      title: 'Compactage',
      category: 'compactage',
      image: '/lovable-uploads/cd214fd5-039b-401a-900b-c2b1eee28e32.png'
    },
    {
      id: 3,
      title: 'Chargement',
      category: 'chargement',
      image: '/lovable-uploads/cc256fb8-05f3-4982-bdb2-6413414b3db1.png'
    },
    {
      id: 4,
      title: 'Terrassement',
      category: 'terrassement',
      image: '/lovable-uploads/d821c0ba-bf70-4f75-8546-dbc64980905b.png'
    },
    {
      id: 5,
      title: 'Construction',
      category: 'construction',
      image: '/lovable-uploads/0879026f-0ebf-429d-b447-6ee256248b60.png'
    },
    {
      id: 6,
      title: 'Terrassement',
      category: 'terrassement',
      image: '/lovable-uploads/1bd720bd-9635-455f-8849-f89512705c25.png'
    },
    {
      id: 7,
      title: 'Transport',
      category: 'transport',
      image: '/lovable-uploads/5849e000-e611-4774-9d9e-c823996b8d14.png'
    },
    {
      id: 8,
      title: 'Levage',
      category: 'levage',
      image: '/lovable-uploads/75348329-b44b-4869-92a9-c4c86585eae2.png'
    },
    {
      id: 9,
      title: 'Transport lourd',
      category: 'transport',
      image: '/lovable-uploads/a66d0727-cac4-4424-ad2b-1703cc5faf65.png'
    }
  ];
  
  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'excavation', name: 'Excavation' },
    { id: 'compactage', name: 'Compactage' },
    { id: 'chargement', name: 'Chargement' },
    { id: 'terrassement', name: 'Terrassement' },
    { id: 'transport', name: 'Transport' }
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
              subtitle="Découvrez notre expertise à travers nos différents projets."
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
