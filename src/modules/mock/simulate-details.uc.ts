import axios from "../../api/axios";
import useGardenParams from "../graden-details/garden-params.uc";

export interface GardenDetails {
  name: string;
  history: {
    time: string;
    temp: number;
    humid: number;
  }[];
}
function getRandomFloat(min: number, max: number, decimals: number = 2) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}

const useSimulateDB = () => {
  async function create() {
    return Promise.all(
      ["plant1", "plant2"].map(async (plant) => {
        const { gardenParams } = useGardenParams(plant);

        const currentDetails = await axios.get(`/data/${plant}}`, {
          headers: { "Content-Type": "application/json" },
        });

        if (!gardenParams || !currentDetails)
          throw new Error("No params or current details to this plant found");

        const newTemp = getRandomFloat(
          gardenParams?.min_temp - 10,
          gardenParams?.max_temp + 10
        );
        const newHumid = getRandomFloat(
          gardenParams?.min_humid - 10,
          gardenParams?.max_humid + 10
        );

        const result = await axios.patch(
          `/data/${plant}}`,
          { headers: { "Content-Type": "application/json" } },
          {
            data: {
              id: currentDetails.data.id,
              name: currentDetails.data.name,
              history: [
                ...currentDetails.data.history,
                {
                  "time": new Date().getTime(),
                  "temp": newTemp,
                  "humid": newHumid,
                },
              ],
            },
          }
        );

        if (!result) {
          throw new Error(`Error to update ${plant}}`);
        }
      })
    );
  }

  return {
    create,
  };
};

export default useSimulateDB;
