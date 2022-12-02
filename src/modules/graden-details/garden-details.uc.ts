import { useEffect, useState } from "react";
import axios from "../../api/axios";

export interface GardenDetails {
  name: string;
  history: PlantHistoryDetail[];
}

export interface PlantHistoryDetail {
  time: string;
  temp: number;
  humid: number;
}

const useGardenDetails = (plantId: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gardenData, setGardenData] = useState<GardenDetails | null>(null);

  async function getGardenDetails() {
    const result = await axios.get(`/data/${plantId}`, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("result", result);

    if (!result) {
      throw new Error(`Plant with name ${plantId} not found`);
    }

    setGardenData(result.data);
  }

  function invalidate() {
    setIsLoading(true);
    getGardenDetails()
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setIsLoading(true);
    getGardenDetails()
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, [plantId]);

  return {
    gardenData,
    current:
      gardenData?.history && gardenData.history[gardenData.history.length - 1],
    invalidate,
    isLoading,
  };
};

export default useGardenDetails;
