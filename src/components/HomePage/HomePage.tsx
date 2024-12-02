"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import vehicleAPI from "@/api/vehicleAPI";
import { VehicleMark } from "@/types/vehicleTypes";

const HomePage = () => {
   const [vehicleMarks, setVehicleMarks] = useState<VehicleMark[]>([]);
   const [selectedMark, setSelectedMark] = useState<string | null>(null);
   const [selectedYear, setSelectedYear] = useState<string | null>(null);

   const getVehicleMarks = async () => {
      vehicleAPI
         .loadVehicleMarks()
         .then((response) => setVehicleMarks(response.Results))
         .catch((error) => console.error(error));
   };

   useEffect(() => {
      getVehicleMarks();
   }, []);

   const handleMarkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedMark(e.target.value);
   };

   const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedYear(e.target.value);
   };

   const currentYear = new Date().getFullYear();
   const modelYears = Array.from({ length: currentYear - 2015 + 1 }, (_, i) =>
      (2015 + i).toString()
   );

   return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-700">
         <h1 className="text-4xl font-black text-gray-600 mb-6">
            Car Dealer App
         </h1>

         <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96">
            <label
               htmlFor="marks"
               className="block text-lg font-semibold text-red-400 mb-2"
            >
               Select Vehicle Mark:
            </label>
            <select
               id="marks"
               className="text-stone-950 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
               onChange={handleMarkChange}
               value={selectedMark || ""}
            >
               <option>Select Make</option>
               {vehicleMarks.map((item) => (
                  <option //
                     key={item.MakeId}
                     value={item.MakeId}
                  >
                     {item.MakeName}
                  </option>
               ))}
            </select>

            <label
               htmlFor="years"
               className="block text-lg font-semibold text-red-400 mb-2"
            >
               Select Model Year:
            </label>
            <select
               id="years"
               className="text-stone-950 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
               onChange={handleYearChange}
               value={selectedYear || ""}
            >
               <option>Select Year</option>
               {modelYears.map((year) => (
                  <option key={year} value={year}>
                     {year}
                  </option>
               ))}
            </select>

            <Link
               href={
                  selectedMark && selectedYear
                     ? `/result/${selectedMark}/${selectedYear}`
                     : ""
               }
               className={`block w-full text-center py-3 rounded-lg font-semibold ${
                  selectedMark &&
                  selectedYear &&
                  selectedMark !== "Select Make" &&
                  selectedYear !== "Select Year"
                     ? "bg-red-400 text-white hover:bg-blue-600"
                     : "bg-gray-400 text-gray-700 cursor-not-allowed"
               }`}
            >
               NEXT
            </Link>
         </div>
      </section>
   );
};

export default HomePage;
