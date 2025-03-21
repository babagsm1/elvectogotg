
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Button from "../components/common/Button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16">
          <h1 className="text-8xl font-bold text-elvec-600 mb-4">404</h1>
          <p className="text-2xl text-gray-800 mb-8 font-display">Oops! Page non trouvée</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée. 
            Veuillez vérifier l'URL ou retourner à la page d'accueil.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="h-5 w-5 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
