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
    plant1?: Plant,
    setPlant1?: any,
    plant2?: Plant,
    setPlant2?: any,
}
const PlantContext = createContext<IPlantContext>({});

export const PlantProvider = ({ children }: {children:any}) => {

    const [plantParams, setPlantParams] = useState([]);
    const [plant1, setPlant1] = useState({});
    const [plant2, setPlant2] = useState({});

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/params');
            setPlantParams(data);
            setPlant1(data[0]);
            setPlant2(data[1]);
        })();
    }, []);

    console.log(plant1,plant2,plantParams)
    return (
        <PlantContext.Provider value={{ 
            plantParams,
            plant1,
            setPlant1,
            plant2,
            setPlant2
        }}>
        {children}
        </PlantContext.Provider>
    )
}

export const usePlant = () => useContext(PlantContext);