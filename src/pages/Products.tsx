
import { Truck, Shield, Award, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import AnimatedSection from '../components/animations/AnimatedSection';

const Products = () => {
  // Liste des produits principaux
  const mainProducts = [
    {
      id: 1,
      title: 'Bulldozers',
      description: 'Puissants et robustes pour tous types de terrassement',
      image: '/lovable-uploads/f7ba1d62-eae3-4d1d-be31-64d8282a9c53.png',
      features: ['Grande puissance', 'Robustesse', 'Polyvalence']
    },
    {
      id: 2,
      title: 'Compacteurs',
      description: 'Compactage efficace pour vos projets de construction',
      image: '/lovable-uploads/cd214fd5-039b-401a-900b-c2b1eee28e32.png',
      features: ['Compactage optimal', 'Facile à manœuvrer', 'Rendement élevé']
    },
    {
      id: 3,
      title: 'Grues mobiles',
      description: 'Soulevez et déplacez des charges lourdes avec précision',
      image: '/lovable-uploads/cc256fb8-05f3-4982-bdb2-6413414b3db1.png',
      features: ['Grande portée', 'Capacité de levage importante', 'Mobilité']
    },
    {
      id: 4,
      title: 'Excavateurs',
      description: 'Creusez avec précision et puissance',
      image: '/lovable-uploads/d821c0ba-bf70-4f75-8546-dbc64980905b.png',
      features: ['Précision', 'Polyvalence', 'Productivité élevée']
    }
  ];

  // Autres équipements disponibles
  const otherEquipment = [
    'Chargeuses', 'Niveleuses', 'Tractopelles', 'Rouleaux compresseurs',
    'Camions bennes', 'Camions citernes', 'Marteaux-piqueurs', 'Compresseurs'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-elvec-900 to-elvec-800 text-white py-16">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay" 
          style={{ backgroundImage: `url('/lovable-uploads/0879026f-0ebf-429d-b447-6ee256248b60.png')` }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Nos Produits</h1>
              <p className="text-xl text-gray-300 mb-8">
                Découvrez notre gamme complète d'engins de chantier et d'équipements professionnels
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-white text-elvec-800 hover:bg-gray-100">
                    Demander un devis
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Nos services
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section Principaux Produits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle 
              title="Notre Flotte d'Engins" 
              subtitle="Des équipements professionnels pour tous vos projets de construction"
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {mainProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 100} animationType="slide-up">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-semibold text-elvec-900 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle2 className="text-elvec-600 h-5 w-5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 pb-6 mt-auto">
                    <Link to="/contact">
                      <Button variant="outline" className="w-full">
                        Réserver maintenant
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section Autres Équipements */}
      <section className="py-16 bg-elvec-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img 
                  src="/lovable-uploads/1bd720bd-9635-455f-8849-f89512705c25.png" 
                  alt="Équipements ELVEC TOGO" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 bg-elvec-600 text-white p-4 rounded-lg shadow-lg hidden md:block">
                  <img 
                    src="/lovable-uploads/fa46f65b-f983-4a81-b8cc-895c85f987b3.png" 
                    alt="ELVEC TOGO" 
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide-right">
              <SectionTitle 
                title="Autres Équipements Disponibles" 
                subtitle="Une large gamme d'engins pour tous vos besoins"
                className="lg:text-left"
              />
              
              <p className="text-gray-600 mb-6">
                En plus de nos produits phares, nous disposons d'une grande variété d'équipements pour répondre à tous vos besoins en construction et en terrassement. Notre flotte est régulièrement entretenue pour garantir des performances optimales sur vos chantiers.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {otherEquipment.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-elvec-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto">
                    Demander un devis
                  </Button>
                </Link>
                <Link to="/vehicules">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Voir nos véhicules
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle 
              title="Pourquoi Choisir Nos Produits" 
              subtitle="Les avantages de faire confiance à ELVEC TOGO"
              centered
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <AnimatedSection delay={100} animationType="slide-up">
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full border-t-4 border-elvec-600">
                <div className="bg-elvec-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-elvec-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-elvec-900">Équipements modernes</h3>
                <p className="text-gray-600">Nous investissons constamment dans les derniers modèles d'engins pour offrir des performances optimales.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} animationType="slide-up">
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full border-t-4 border-elvec-600">
                <div className="bg-elvec-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-elvec-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-elvec-900">Maintenance régulière</h3>
                <p className="text-gray-600">Tous nos équipements sont entretenus régulièrement pour garantir leur bon fonctionnement et leur longévité.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300} animationType="slide-up">
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full border-t-4 border-elvec-600">
                <div className="bg-elvec-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-elvec-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-elvec-900">Sécurité garantie</h3>
                <p className="text-gray-600">La sécurité est notre priorité. Nos équipements sont conformes aux normes de sécurité les plus strictes.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400} animationType="slide-up">
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full border-t-4 border-elvec-600">
                <div className="bg-elvec-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-elvec-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-elvec-900">Qualité supérieure</h3>
                <p className="text-gray-600">Nous ne proposons que des produits de marques reconnues pour leur qualité et leur fiabilité.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-elvec-900 to-elvec-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Prêt à louer nos équipements ?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Contactez-nous dès aujourd'hui pour bénéficier de nos offres spéciales et obtenir un devis personnalisé.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Link to="/contact">
                    <Button className="bg-white text-elvec-800 hover:bg-gray-100 w-full sm:w-auto">
                      Contactez-nous
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                      Découvrir nos services
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="fade-in">
              <div className="relative">
                <img 
                  src="/lovable-uploads/5849e000-e611-4774-9d9e-c823996b8d14.png" 
                  alt="ELVEC TOGO" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elvec-900/60 to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <img 
                    src="/lovable-uploads/4626bded-4c99-437a-9422-17d3088248d2.png" 
                    alt="ELVEC TOGO Logo" 
                    className="h-16 w-auto mx-auto"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
