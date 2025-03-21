
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Users, Award, TrendingUp } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import AnimatedSection from '../components/animations/AnimatedSection';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('histoire');
  
  const teamMembers = [
    {
      name: 'M. AZIABLE KOSSI',
      position: 'Directeur Général',
      image: '/lovable-uploads/49979eec-46cf-4088-accc-e6efe6aad1df.png'
    },
    {
      name: 'M. Soglom Amah Denis',
      position: 'Responsable matériel',
      image: '/lovable-uploads/49979eec-46cf-4088-accc-e6efe6aad1df.png'
    },
    {
      name: 'Mme AZIABLE ADJO',
      position: 'Secrétaire',
      image: '/lovable-uploads/49979eec-46cf-4088-accc-e6efe6aad1df.png'
    },
    {
      name: 'M. APEMAGNON PASCAL',
      position: 'Comptable Gestionnaire',
      image: '/lovable-uploads/49979eec-46cf-4088-accc-e6efe6aad1df.png'
    }
  ];
  
  const values = [
    {
      title: 'Excellence',
      description: 'Notre engagement pour la qualité et le professionnalisme dans tous nos services.'
    },
    {
      title: 'Fiabilité',
      description: 'Nous tenons nos promesses et respectons nos engagements envers nos clients.'
    },
    {
      title: 'Innovation',
      description: 'Nous investissons dans les technologies et équipements les plus récents.'
    },
    {
      title: 'Satisfaction Client',
      description: 'La satisfaction de nos clients est notre priorité absolue.'
    }
  ];
  
  return (
    <Layout>
      <div className="bg-elvec-900 text-white py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">À Propos de Nous</h1>
              <p className="text-xl text-gray-300">
                Notre histoire et nos réussites dans le domaine de la location d'engins lourds et de services BTP au Togo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection className="w-full lg:w-1/2">
              <img 
                src="/lovable-uploads/b0b5b198-37ad-4d34-bee4-11b451fc3baf.png" 
                alt="À propos d'ELVEC TOGO" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </AnimatedSection>
            
            <AnimatedSection animationType="slide-right" className="w-full lg:w-1/2">
              <SectionTitle 
                title="Notre Histoire et Nos Réussites" 
                className="mb-6 lg:text-left"
              />
              
              <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-elvec-600">
                <div className="flex space-x-4 mb-6 border-b">
                  <button 
                    className={`py-3 px-4 font-medium ${activeTab === 'histoire' ? 'text-elvec-600 border-b-2 border-elvec-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('histoire')}
                  >
                    Notre Histoire
                  </button>
                  <button 
                    className={`py-3 px-4 font-medium ${activeTab === 'mission' ? 'text-elvec-600 border-b-2 border-elvec-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('mission')}
                  >
                    Notre Mission
                  </button>
                  <button 
                    className={`py-3 px-4 font-medium ${activeTab === 'vision' ? 'text-elvec-600 border-b-2 border-elvec-600' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('vision')}
                  >
                    Notre Vision
                  </button>
                </div>
                
                <div>
                  {activeTab === 'histoire' && (
                    <div>
                      <p className="text-gray-600 mb-4">
                        Depuis notre création, nous avons connu une évolution remarquable. Grâce à notre expertise et à notre engagement envers la satisfaction de nos clients, nous avons réussi à devenir un leader dans notre domaine.
                      </p>
                      <p className="text-gray-600 mb-4">
                        ELVEC TOGO a été fondée avec la vision de fournir des services de location d'engins de qualité supérieure au Togo. Au fil des années, nous avons élargi notre offre pour inclure une gamme complète de services BTP et de location de véhicules avec chauffeur.
                      </p>
                      <p className="text-gray-600">
                        Notre parcours est marqué par un engagement constant envers l'excellence et l'innovation, nous permettant de répondre aux besoins évolutifs du marché togolais.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'mission' && (
                    <div>
                      <p className="text-gray-600 mb-4">
                        Notre mission est de fournir des solutions de location d'engins lourds et de services BTP de haute qualité, fiables et adaptées aux besoins spécifiques de nos clients.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Nous nous engageons à maintenir les normes les plus élevées en matière de sécurité, de performance et de service client, tout en contribuant au développement des infrastructures au Togo.
                      </p>
                      <p className="text-gray-600">
                        Chaque jour, nous travaillons à rendre les projets de construction plus efficaces et plus simples à réaliser pour nos clients.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'vision' && (
                    <div>
                      <p className="text-gray-600 mb-4">
                        Notre vision est de devenir la référence incontournable en matière de location d'engins lourds et de services BTP au Togo et dans la région ouest-africaine.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Nous aspirons à élargir continuellement notre gamme de services et notre flotte d'équipements, tout en maintenant notre engagement envers l'excellence et la satisfaction client.
                      </p>
                      <p className="text-gray-600">
                        À long terme, nous visons à contribuer significativement au développement des infrastructures et à la croissance économique du Togo.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-elvec-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle 
              title="Nos Valeurs" 
              subtitle="Les principes qui guident notre entreprise au quotidien"
              centered
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 100} animationType="slide-up">
                <div className="bg-white p-6 rounded-lg shadow-md h-full border-t-4 border-elvec-600">
                  <h3 className="text-xl font-semibold mb-3 text-elvec-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionTitle 
              title="Notre Équipe" 
              subtitle="Rencontrez les membres clés de notre équipe qui font de notre entreprise un succès."
              centered
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} delay={index * 100} animationType="slide-up">
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-elvec-900">{member.name}</h3>
                    <p className="text-gray-600 mt-1">{member.position}</p>
                    <div className="flex space-x-3 mt-4">
                      <a href="#" className="text-gray-500 hover:text-elvec-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-elvec-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-elvec-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm5.144-17.219c.758.463 1.43 1.136 1.893 1.895.311.514.145 1.176-.369 1.487-.514.311-1.176.144-1.487-.369-.309-.509-.741-.941-1.25-1.25-.514-.31-.682-.973-.371-1.487.311-.513.973-.682 1.487-.371.032.019.063.039.094.06l.003.002zm-9.783 4.445c-1.399 2.423-.902 5.532 1.521 6.932 1.986 1.145 4.465.708 5.915-.979-.468.058-.962-.015-1.422-.348-1.003-.728-1.228-2.123-.501-3.126.364-.501.944-.787 1.544-.814-1.939-1.121-4.431-.48-5.55 1.46-.202.35-.348.721-.434 1.104-.498-.813-1.207-1.461-2.073-1.929zm10.184 9.698c-.654.407-1.369.684-2.116.83l-.001-.004c-.742.146-1.514.144-2.261-.006-.75-.15-1.464-.427-2.118-.833-1.003-.626-1.302-1.953-.676-2.957.626-1.003 1.954-1.302 2.957-.676.62.387 1.398.513 2.118.347.719-.166 1.348-.622 1.75-1.262.626-1.003 1.953-1.302 2.957-.676 1.003.626 1.302 1.954.676 2.957-.626 1.004-1.953 1.303-2.957.676l-.01-.007-.008-.003-.002.011-.01.001zm-8.87-7.325c.526 0 .954.428.954.954 0 .526-.428.954-.954.954-.527 0-.954-.428-.954-.954 0-.526.427-.954.954-.954zm0 4.771c.526 0 .954.428.954.954 0 .526-.428.954-.954.954-.527 0-.954-.428-.954-.954 0-.526.427-.954.954-.954zm4.435-2.385c.526 0 .954.428.954.954 0 .526-.428.954-.954.954-.526 0-.954-.428-.954-.954 0-.526.428-.954.954-.954zm-8.87 0c.527 0 .954.428.954.954 0 .526-.428.954-.954.954-.526 0-.954-.428-.954-.954 0-.526.428-.954.954-.954zm13.305 0c.526 0 .953.428.953.954 0 .526-.428.954-.953.954-.526 0-.954-.428-.954-.954 0-.526.428-.954.954-.954z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-elvec-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Prêt à travailler avec nous?
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en location d'engins lourds et services BTP.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-elvec-800 hover:bg-gray-100">
                  Contactez-nous
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
