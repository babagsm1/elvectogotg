
import Layout from '../components/layout/Layout';
import VehicleCategories from '../components/vehicles/VehicleCategories';
import VehicleReservation from '../components/vehicles/VehicleReservation';
import PopularVehicles from '../components/vehicles/PopularVehicles';
import ClientReviews from '../components/vehicles/ClientReviews';
import HeroSection from '../components/vehicles/HeroSection';
import { Toaster } from 'sonner';

const Vehicles = () => {
  return (
    <Layout>
      <Toaster />
      <HeroSection />
      <VehicleCategories />
      <VehicleReservation />
      <PopularVehicles />
      <ClientReviews />
    </Layout>
  );
};

export default Vehicles;
