import { useEffect, createContext, useState, useContext } from "react";
import axios from "../api/axios";
interface Plant {
  plant?: string;
  min_temp?: number;
  max_temp?: number;
  min_humid?: number;
  max_humid?: number;
  desc?: string;
}
interface IPlantContext {
  plantParams?: Plant[];
  selectedPlants: { [k: string]: Plant };
  setSelectedPlant: any;
}

const PlantContext = createContext<IPlantContext>({
  selectedPlants: {
    plant1: {},
    plant2: {},
  },
  setSelectedPlant: () => {},
});

export const PlantProvider = ({ children }: { children: any }) => {
  const [plantParams, setPlantParams] = useState<Plant[]>([]);
  const [selectedPlants, setSelectedPlants] = useState({});

  const setSelectedPlant = (
    plantNum: "plant1" | "plant2",
    plantName: string
  ) => {
    setSelectedPlants((s: any) => ({
      ...s,
      [plantNum]: plantParams.find((param) => param.plant === plantName),
    }));
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/params");
      setPlantParams(data);
      setSelectedPlants({
        plant1: data[0],
        plant2: data[1],
      });
    })();
  }, []);

  return (
    <PlantContext.Provider
      value={{
        plantParams,
        selectedPlants,
        setSelectedPlant,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
};

export const usePlant = () => useContext(PlantContext);
