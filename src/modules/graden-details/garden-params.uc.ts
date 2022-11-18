import { useEffect, useState } from "react";
import axios from "../../api/axios";

export interface GardenParams {
  plant: string;
  min_temp: number;
  max_temp: number;
  min_humid: number;
  max_humid: number;
  desc: string;
}

const useGardenParams = (plantName: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gardenParams, setGardenParams] = useState<GardenParams | null>(null);

  useEffect(() => {
    async function getGardenParams() {
      const result = await axios.get("/params", {
        headers: { "Content-Type": "application/json" },
      });

      if (!result) {
        throw new Error(`Params not found with name ${plantName}}`);
      }

      setGardenParams(
        result.data.find((param: GardenParams) => param.plant === plantName)
      );
    }

    setIsLoading(true);
    getGardenParams().then(() => setIsLoading(false));
  }, [plantName]);

  return {
    gardenParams,
    isLoading,
  };
};

export default useGardenParams;
