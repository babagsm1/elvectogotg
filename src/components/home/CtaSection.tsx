
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import AnimatedSection from '../animations/AnimatedSection';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-elvec-900 to-elvec-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Réservez dès maintenant votre engin
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10">
              Nous proposons une large gamme d'engins lourds et de véhicules adaptés à tous vos besoins professionnels.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button 
                  className="bg-white text-elvec-800 hover:bg-gray-100 w-full sm:w-auto"
                  size="lg"
                >
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+22870600306">
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  size="lg"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  +228 70 60 03 06
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
