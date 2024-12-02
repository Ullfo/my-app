import {
   VehicleMarksResponse,
   VehicleModelsResponse,
} from "@/types/vehicleTypes";

class vehicleAPI {
   public static loadVehicleMarks = async (): Promise<VehicleMarksResponse> => {
      const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`
      );
      return response.json();
   };

   public static loadSpecificVehicle = async (
      makeId: string,
      year: string
   ): Promise<VehicleModelsResponse> => {
      const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
      );
      return response.json();
   };
}

export default vehicleAPI;
