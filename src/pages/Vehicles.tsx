
import Layout from '../components/layout/Layout';
import VehicleCategories from '../components/vehicles/VehicleCategories';
import VehicleReservation from '../components/vehicles/VehicleReservation';
import PopularVehicles from '../components/vehicles/PopularVehicles';
import ClientReviews from '../components/vehicles/ClientReviews';
import HeroSection from '../components/vehicles/HeroSection';
import { Toaster } from 'sonner';
import { useEffect } from 'react';

const Vehicles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Toaster />
      <HeroSection />
      <VehicleCategories />
      <PopularVehicles />
      <VehicleReservation />
      <ClientReviews />
    </Layout>
  );
};

export default Vehicles;
