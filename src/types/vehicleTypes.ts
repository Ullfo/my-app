export type VehicleMark = {
   MakeName: string;
   MakeId: string;
};

export type VehicleMarksResponse = {
   Results: VehicleMark[];
};

export type VehicleModel = {
   Model_Name: string;
};

export type VehicleModelsResponse = {
   Results: VehicleModel[];
};
