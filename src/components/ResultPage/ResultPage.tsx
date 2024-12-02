"use client";

import { useEffect, useState } from "react";

import vehicleAPI from "@/api/vehicleAPI";
import { VehicleModel } from "@/types/vehicleTypes";

type ResultPageProps = {
   markId: string;
   year: string;
};

const ResultPage: React.FC<ResultPageProps> = ({ markId, year }) => {
   const [vehicleModels, setVehicleModels] = useState<VehicleModel[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   const getSpecificVehicleModel = async () => {
      vehicleAPI
         .loadSpecificVehicle(markId, year)
         .then((response) => setVehicleModels(response.Results))
         .catch((error) => console.error(error))
         .finally(() => setLoading(false));
   };

   useEffect(() => {
      getSpecificVehicleModel();
   }, [markId, year]);

   return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-700 p-4">
         <h1 className="text-orange-700 text-3xl font-bold mb-6">
            Vehicle Models
         </h1>

         {loading ? (
            <p className="text-gray-500">Loading models...</p>
         ) : vehicleModels.length > 0 ? (
            <ul className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
               {vehicleModels.map((item, index) => (
                  <li
                     key={index}
                     className=" text-red-400 border-b last:border-none py-2 px-4 hover:bg-gray-50"
                  >
                     {item.Model_Name}
                  </li>
               ))}
            </ul>
         ) : (
            <p className="text-2xl text-gray-500">
               Sorry, but no models found for this mark and year...
            </p>
         )}
      </section>
   );
};

export default ResultPage;
