import { useEffect, createContext, useState, useContext } from 'react';
import axios from '../api/axios';
interface Plant {
    plant?: string,
    min_temp?: number,
    max_temp?: number,
    min_humid?: number,
    max_humid?: number,
    desc?: string
}
interface IPlantContext {
    plantParams?: Plant[],
    selectedPlants: { [k: string]: Plant };
    setSelectedPlant: any;
}

const PlantContext = createContext<IPlantContext>({
    selectedPlants: {
        plant1: {},
        plant2: {}
    },
    setSelectedPlant: () => {}
});

export const PlantProvider = ({ children }: {children:any}) => {

    const [plantParams, setPlantParams] = useState<Plant[]>([]);
    const [selectedPlants, setSelectedPlants] = useState({});
    // const [plant1, setPlant1] = useState({});
    // const [plant2, setPlant2] = useState({});
    const setSelectedPlant = (plantNum: "plant1" | "plant2", plantName: string) => {
        // console.log({
        //     [plantNum]: plantParams.find(param => param.plant === plantName)
        // })
        setSelectedPlants((s: any) => ({
            ...s,
            [plantNum]: plantParams.find(param => param.plant === plantName)
        }))
    }

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/params');
            setPlantParams(data);
            setSelectedPlants({
                plant1: data[0],
                plant2: data[1]
            })
            // setPlant1(data[0]);
            // setPlant2(data[1]);
        })();
    }, []);

    // console.log(plant1,plant2,plantParams)
    return (
        <PlantContext.Provider value={{ 
            plantParams,
            selectedPlants,
            setSelectedPlant
            // plant1,
            // setPlant1,
            // plant2,
            // setPlant2
        }}>
        {children}
        </PlantContext.Provider>
    )
}

export const usePlant = () => useContext(PlantContext);