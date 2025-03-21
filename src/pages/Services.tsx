
import { Tractor, Hammer, Wrench, Truck, Building, HardHat, Car, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/common/ServiceCard';
import Button from '../components/common/Button';
import AnimatedSection from '../components/animations/AnimatedSection';

const Services = () => {
  // Services BTP
  const constructionServices = [
    {
      title: 'Terrassement',
      description: 'Nous offrons des services de terrassement pour préparer votre terrain pour la construction.',
      icon: Tractor
    },
    {
      title: 'Démolition',
      description: 'Nos équipes spécialisées assurent la démolition sécurisée de structures existantes.',
      icon: Hammer
    },
    {
      title: 'Piste Rurale',
      description: 'Nous réalisons la construction et l\'entretien de pistes rurales pour améliorer l\'accès aux zones reculées.',
      icon: Wrench
    },
    {
      title: 'Ponceaux',
      description: 'Nous installons des ponceaux pour assurer un drainage efficace sur vos chantiers.',
      icon: Building
    },
    {
      title: 'Pose de Pavé',
      description: 'Notre équipe est experte dans la pose de pavés pour vos allées, cours et espaces extérieurs.',
      icon: HardHat
    },
    {
      title: 'Pavage',
      description: 'Nous proposons des services de pavage pour créer des surfaces durables et esthétiques.',
      icon: Truck
    }
  ];
  
  // Types d'engins lourds disponibles
  const equipmentList = [
    'Bulldozers',
    'Excavateurs',
    'Chargeuses',
    'Niveleuses',
    'Rouleaux compresseurs',
    'Camions bennes',
    'Camions citernes',
    'Tractopelles',
    'Compacteurs',
    'Grues mobiles'
  ];
  
  return (
    <Layout>
      <div className="bg-elvec-900 text-white py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Nos Services</h1>
              <p className="text-xl text-gray-300">
                Des solutions complètes pour vos projets de construction et de transport.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Services BTP Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle 
              title="Services BTP" 
              subtitle="Nous proposons également divers services pour répondre à tous vos besoins en construction."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {constructionServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Location d'Engins Lourds Section */}
      <section className="py-16 bg-elvec-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img 
                  src="/lovable-uploads/d821c0ba-bf70-4f75-8546-dbc64980905b.png" 
                  alt="Engin de chantier" 
                  className="rounded-lg shadow-lg w-full object-cover"
                />
                <div className="absolute -bottom-5 -right-5 bg-elvec-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="text-xl font-bold">Équipements professionnels</p>
                  <p className="text-sm">Pour tous vos projets</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animationType="slide-right">
              <SectionTitle 
                title="Service de Location d'Engins Lourds" 
                subtitle="Découvrez nos différents engins pour vos travaux."
                className="lg:text-left"
              />
              
              <p className="text-gray-600 mb-6">
                Notre service de location d'engins lourds propose une solution fiable et efficace pour tous vos besoins en chantier. Nous mettons à votre disposition une flotte d'engins modernes et puissants pour garantir la réussite de vos projets.
              </p>
              
              <p className="text-gray-600 mb-6">
                Que ce soit pour des travaux de terrassement, de démolition, ou de construction, nos engins lourds sont équipés pour réaliser toutes vos tâches avec précision et efficacité.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {equipmentList.map((equipment, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-elvec-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{equipment}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Demander un devis
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Contactez-nous
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Location de Voitures Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <SectionTitle 
                title="Location de Voitures avec Chauffeur" 
                subtitle="Un service personnalisé pour vos déplacements professionnels et personnels."
                className="lg:text-left"
              />
              
              <p className="text-gray-600 mb-6">
                Découvrez les avantages de la location de voitures avec chauffeur et profitez d'un service pratique et fiable. Que vous ayez besoin d'un véhicule pour vos déplacements professionnels ou personnels, notre entreprise vous offre une solution adaptée à vos besoins.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="mt-1">
                    <Car className="h-6 w-6 text-elvec-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-elvec-900">Confort</h3>
                    <p className="text-gray-600">Profitez d'un confort optimal et laissez-vous conduire par nos chauffeurs professionnels.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Clock className="h-6 w-6 text-elvec-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-elvec-900">Flexibilité</h3>
                    <p className="text-gray-600">Bénéficiez d'une grande flexibilité dans vos déplacements grâce à nos services disponibles 7j/7.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Réserver une voiture
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full sm:w-auto">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="order-1 lg:order-2" animationType="slide-right">
              <img 
                src="/lovable-uploads/cc256fb8-05f3-4982-bdb2-6413414b3db1.png" 
                alt="Location de voitures avec chauffeur" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-elvec-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Besoin d'un service sur mesure?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Contactez-nous pour discuter de vos besoins spécifiques. Notre équipe est prête à vous proposer une solution adaptée.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-elvec-800 hover:bg-gray-100">
                  Demander un devis gratuit
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
