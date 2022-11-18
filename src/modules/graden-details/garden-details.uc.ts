import { useEffect, useState } from "react";
import axios from "../../api/axios";

export interface GardenDetails {
  name: string;
  history: {
    time: string;
    temp: number;
    humid: number;
  }[];
}

const useGardenDetails = (plantName: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gardenData, setGardenData] = useState<GardenDetails | null>(null);

  useEffect(() => {
    async function getGardenDetails() {
      const result = await axios.get("/data", {
        headers: { "Content-Type": "application/json" },
      });

      if (!result) {
        throw new Error(`Plant not found with name ${plantName}}`);
      }

      setGardenData(
        result.data.find((plant: GardenDetails) => plant.name === plantName)
      );
    }

    setIsLoading(true);
    getGardenDetails().then(() => setIsLoading(false));
  }, [plantName]);

  return {
    gardenData,
    current:
      gardenData?.history && gardenData.history[gardenData.history.length - 1],
    isLoading,
  };
};

export default useGardenDetails;
