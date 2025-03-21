
import { Bulldozer, Hammer, Road, Truck, Building, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../common/ServiceCard';
import Button from '../common/Button';
import AnimatedSection from '../animations/AnimatedSection';

const Services = () => {
  const services = [
    {
      title: 'Terrassement',
      description: 'Nous offrons des services de terrassement pour préparer votre terrain pour la construction.',
      icon: Bulldozer
    },
    {
      title: 'Démolition',
      description: 'Nos équipes spécialisées assurent la démolition sécurisée de structures existantes.',
      icon: Hammer
    },
    {
      title: 'Piste Rurale',
      description: 'Nous réalisons la construction et l'entretien de pistes rurales pour améliorer l'accès aux zones reculées.',
      icon: Road
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle 
            title="Services BTP" 
            subtitle="Nous proposons également divers services pour répondre à tous vos besoins en construction."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services">
            <Button variant="outline">
              Voir tous nos services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
