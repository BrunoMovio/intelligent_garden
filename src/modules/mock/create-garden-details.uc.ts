import useGardenDetails, {
  PlantHistoryDetail,
} from "../graden-details/garden-details.uc";
import axios from "../../api/axios";
import useGardenParams, {
  GardenParams,
} from "../graden-details/garden-params.uc";

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

const useCreateGardenDetails = () => {
  const { invalidate: invalidate1 } = useGardenDetails("plant1");

  const { invalidate: invalidate2 } = useGardenDetails("plant2");

  async function create() {
    const params = await axios.get("/params", {
      headers: { "Content-Type": "application/json" },
    });

    const result1 = await axios.get(`/data/plant1`, {
      headers: { "Content-Type": "application/json" },
    });

    const result2 = await axios.get(`/data/plant2`, {
      headers: { "Content-Type": "application/json" },
    });

    const gardenParams1 = params.data.find(
      (param: GardenParams) => param.plant === "Tomate"
    );
    const gardenParams2 = params.data.find(
      (param: GardenParams) => param.plant === "Manjericão"
    );

    const gardenData1 = result1.data;
    const gardenData2 = result2.data;

    if (!gardenData1 || !gardenData2) return;

    const newTemp1 = getRandomFloat(
      (gardenParams1?.min_temp || 0) - 10,
      (gardenParams1?.max_temp || 0) + 10
    );
    const newHumid1 = getRandomFloat(
      (gardenParams1?.min_humid || 0) - 10,
      (gardenParams1?.max_humid || 0) + 10
    );

    await axios
      .put(
        `/data/plant1`,
        {
          name: gardenData1?.name,
          history: [
            ...(gardenData1?.history as PlantHistoryDetail[]),
            {
              "time": Number((new Date().getTime() / 1000).toFixed(0)),
              "temp": newTemp1,
              "humid": newHumid1,
            },
          ],
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => invalidate1());

    const newTemp2 = getRandomFloat(
      (gardenParams2?.min_temp || 0) - 10,
      (gardenParams2?.max_temp || 0) + 10
    );
    const newHumid2 = getRandomFloat(
      (gardenParams2?.min_humid || 0) - 10,
      (gardenParams2?.max_humid || 0) + 10
    );

    await axios
      .put(
        `/data/plant2`,
        {
          id: "plant2",
          name: gardenData2?.name,
          history: [
            ...(gardenData2?.history as PlantHistoryDetail[]),
            {
              "time": Number((new Date().getTime() / 1000).toFixed(0)),
              "temp": newTemp2,
              "humid": newHumid2,
            },
          ],
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => invalidate2());
  }

  return {
    create,
  };
};

export default useCreateGardenDetails;
