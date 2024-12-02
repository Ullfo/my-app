import ResultPage from "@/components/ResultPage/ResultPage";
import vehicleAPI from "@/api/vehicleAPI";

type ParamsProps = {
   params: Promise<{
      makeId: string;
      year: string;
   }>;
};

export async function generateStaticParams() {
   try {
      const marksResponse = await vehicleAPI.loadVehicleMarks();
      const vehicleMarks = marksResponse.Results;

      const currentYear = new Date().getFullYear();
      const modelYears = Array.from(
         { length: currentYear - 2015 + 1 },
         (_, i) => (2015 + i).toString()
      );

      return vehicleMarks.flatMap((item) =>
         modelYears.map((year) => ({
            makeId: item.MakeId.toString(),
            year: year,
         }))
      );
   } catch (error) {
      console.error(error);
      return [];
   }
}

export default async function Page({ params }: ParamsProps) {
   const { makeId, year } = await params;

   return (
      <div>
         <ResultPage markId={makeId} year={year} />
      </div>
   );
}
