import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Calendar as CalendarIcon, CheckCircle } from "lucide-react";
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../animations/AnimatedSection';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Button from '../common/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const formSchema = z.object({
  vehicle: z.string({
    required_error: "Veuillez sélectionner un véhicule",
  }),
  startDate: z.date({
    required_error: "Veuillez sélectionner une date de début",
  }),
  endDate: z.date({
    required_error: "Veuillez sélectionner une date de fin",
  }),
  fullName: z.string().min(3, {
    message: "Le nom complet doit contenir au moins 3 caractères",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide",
  }),
  phone: z.string().min(8, {
    message: "Le numéro de téléphone doit contenir au moins 8 chiffres",
  }),
  withDriver: z.string().optional(),
  insurance: z.string().optional(),
});

const vehiclesData = [
  { id: 'corolla', name: 'Toyota Corolla', pricePerDay: 35000 },
  { id: 'accent', name: 'Hyundai Accent', pricePerDay: 32000 },
  { id: 'rav4', name: 'Toyota RAV4', pricePerDay: 45000 },
  { id: 'berline', name: 'Mercedes Classe C', pricePerDay: 60000 },
  { id: 'hiace', name: 'Toyota Hiace', pricePerDay: 70000 },
  { id: 'camry', name: 'Toyota Camry', pricePerDay: 55000 },
];

const VehicleReservation = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [reservationData, setReservationData] = useState<any>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      withDriver: "non",
      insurance: "non",
    },
  });

  const getDaysDifference = (startDate: Date, endDate: Date) => {
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const calculateTotalPrice = (data: z.infer<typeof formSchema>) => {
    const selectedVehicle = vehiclesData.find(v => v.id === data.vehicle);
    if (!selectedVehicle || !data.startDate || !data.endDate) return 0;
    
    const basePrice = selectedVehicle.pricePerDay;
    const days = getDaysDifference(data.startDate, data.endDate);
    
    let totalPrice = basePrice * days;
    
    if (data.withDriver === "oui") {
      totalPrice += 15000 * days;
    }
    
    if (data.insurance === "oui") {
      totalPrice += 5000 * days;
    }
    
    return totalPrice;
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const selectedVehicle = vehiclesData.find(v => v.id === data.vehicle);
    if (!selectedVehicle) return;
    
    const days = getDaysDifference(data.startDate, data.endDate);
    const totalPrice = calculateTotalPrice(data);
    
    const reservationSummary = {
      ...data,
      vehicleName: selectedVehicle.name,
      days,
      basePrice: selectedVehicle.pricePerDay,
      driverPrice: data.withDriver === "oui" ? 15000 * days : 0,
      insurancePrice: data.insurance === "oui" ? 5000 * days : 0,
      totalPrice,
      formattedStartDate: format(data.startDate, "dd MMMM yyyy", { locale: fr }),
      formattedEndDate: format(data.endDate, "dd MMMM yyyy", { locale: fr }),
    };
    
    setReservationData(reservationSummary);
    setShowSummary(true);
  };

  const confirmReservation = () => {
    toast.success("Votre demande de réservation a été envoyée avec succès !");
    setShowSummary(false);
    form.reset();
  };

  return (
    <section className="py-16 bg-elvec-50" id="reservation">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle 
            title="Réservez votre véhicule" 
            subtitle="Simple, rapide et sécurisé - Remplissez le formulaire ci-dessous pour réserver votre véhicule"
            centered
          />
        </AnimatedSection>

        {!showSummary ? (
          <AnimatedSection>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="vehicle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Véhicule</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez un véhicule" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {vehiclesData.map((vehicle) => (
                                <SelectItem key={vehicle.id} value={vehicle.id}>
                                  {vehicle.name} - {vehicle.pricePerDay.toLocaleString()} FCFA/jour
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date de début</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "dd MMMM yyyy", { locale: fr })
                                  ) : (
                                    <span>Sélectionnez une date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className="pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date de fin</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "dd MMMM yyyy", { locale: fr })
                                  ) : (
                                    <span>Sélectionnez une date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => 
                                  date < (form.getValues().startDate || new Date())
                                }
                                initialFocus
                                className="pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom complet" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="votre@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="+228 XX XX XX XX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
                    <h3 className="text-lg font-medium col-span-full">Options supplémentaires</h3>
                    
                    <FormField
                      control={form.control}
                      name="withDriver"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Avec chauffeur (+15 000 FCFA/jour)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez une option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="oui">Oui</SelectItem>
                              <SelectItem value="non">Non</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="insurance"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assurance supplémentaire (+5 000 FCFA/jour)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez une option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="oui">Oui</SelectItem>
                              <SelectItem value="non">Non</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button type="submit" size="lg">
                      Vérifier la disponibilité
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <Card className="border-green-200 shadow-lg">
                <CardHeader className="bg-green-50 border-b border-green-100">
                  <CardTitle className="text-center text-green-800 flex items-center justify-center gap-2">
                    <CheckCircle className="text-green-600" />
                    Récapitulatif de votre réservation
                  </CardTitle>
                  <CardDescription className="text-center text-green-700">
                    Vérifiez les détails de votre réservation avant confirmation
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-gray-700">Détails du véhicule</h3>
                      <p className="text-lg font-semibold">{reservationData?.vehicleName}</p>
                      <p className="text-sm text-gray-600">
                        {reservationData?.formattedStartDate} au {reservationData?.formattedEndDate}
                      </p>
                      <p className="text-sm text-gray-600">Durée: {reservationData?.days} jour(s)</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700">Vos coordonnées</h3>
                      <p className="text-lg font-semibold">{reservationData?.fullName}</p>
                      <p className="text-sm text-gray-600">{reservationData?.email}</p>
                      <p className="text-sm text-gray-600">{reservationData?.phone}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t pt-4">
                    <h3 className="font-medium text-gray-700 mb-2">Options sélectionnées</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Avec chauffeur:</span>
                        <span>{reservationData?.withDriver === "oui" ? "Oui" : "Non"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Assurance supplémentaire:</span>
                        <span>{reservationData?.insurance === "oui" ? "Oui" : "Non"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t pt-4">
                    <h3 className="font-medium text-gray-700 mb-2">Détails du prix</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Prix de base ({reservationData?.basePrice.toLocaleString()} FCFA × {reservationData?.days} jours):</span>
                        <span>{(reservationData?.basePrice * reservationData?.days).toLocaleString()} FCFA</span>
                      </div>
                      {reservationData?.withDriver === "oui" && (
                        <div className="flex justify-between">
                          <span>Chauffeur (15 000 FCFA × {reservationData?.days} jours):</span>
                          <span>{reservationData?.driverPrice.toLocaleString()} FCFA</span>
                        </div>
                      )}
                      {reservationData?.insurance === "oui" && (
                        <div className="flex justify-between">
                          <span>Assurance (5 000 FCFA × {reservationData?.days} jours):</span>
                          <span>{reservationData?.insurancePrice.toLocaleString()} FCFA</span>
                        </div>
                      )}
                      <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>Prix total:</span>
                        <span>{reservationData?.totalPrice.toLocaleString()} FCFA</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline" onClick={() => setShowSummary(false)}>
                    Modifier
                  </Button>
                  <Button variant="primary" onClick={confirmReservation}>
                    Confirmer la réservation
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default VehicleReservation;
