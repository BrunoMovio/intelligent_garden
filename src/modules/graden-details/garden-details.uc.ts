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
      const result = await axios.get(`/data/${plantName}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (!result) {
        throw new Error(`Plant with name ${plantName} not found`);
      }

      // console.log(result.data)
      setGardenData(
        result.data
      );
    }

    setIsLoading(true);
    getGardenDetails().then(() => setIsLoading(false)).catch(err => console.log(err));
  }, [plantName]);

  return {
    gardenData,
    current:
      gardenData?.history && gardenData.history[gardenData.history.length - 1],
    isLoading,
  };
};

export default useGardenDetails;
