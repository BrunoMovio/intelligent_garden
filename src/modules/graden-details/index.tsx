import { Heading, HStack, VStack, Box, Text, Spinner } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import MultiLineChart from "./components/line-chart";
import TemperatureChart from "./components/temperature-chart";
import MoistureChart from "./components/moisture-chart";
import useGardenDetails from "./garden-details.uc";
import { PageHeading } from "../../commom/components/typography/page-heading.component";
import { usePlant } from "../../contexts/plant";

function GardenDetails(input: { plantName: string }) {
  const {
    gardenData,
    current,
    isLoading: isLoadingDetails,
  } = useGardenDetails(input.plantName);
  const { selectedPlants } = usePlant();

  if (!gardenData || !gardenData.history || isLoadingDetails)
    return (
      <VStack justifyContent={"space-evenly"} w={"44vw"}>
        <Spinner w={"40px"} h={"40px"} />
        <Spinner w={"40px"} h={"40px"} />
      </VStack>
    );

  return (
    <>
      {gardenData ? (
        <GridItem colSpan={3}>
          <VStack textAlign="center">
            <Heading fontSize="30px">
              {selectedPlants[input.plantName].plant}
            </Heading>
            <HStack>
              <Box>
                <VStack>
                  <TemperatureChart
                    value={(current?.temp || 0) / 100}
                    max={selectedPlants[input.plantName].max_temp!}
                    min={selectedPlants[input.plantName].min_temp!}
                  />
                  <MoistureChart
                    value={(current?.humid || 0) / 100}
                    max={selectedPlants[input.plantName].max_humid!}
                    min={selectedPlants[input.plantName].min_humid!}
                  />
                </VStack>
              </Box>
              <Box w={"240px"}>
                <Text textAlign={"justify"}>
                  {selectedPlants[input.plantName].desc}
                </Text>
                <Text textAlign={"center"}>
                  Temperatura <strong>mínima</strong> -{" "}
                  {selectedPlants[input.plantName].min_temp} °C
                </Text>
                <Text textAlign={"center"}>
                  Temperatura <strong>máxima</strong> -{" "}
                  {selectedPlants[input.plantName].max_temp} °C
                </Text>
                <Text textAlign={"center"}>
                  Umidade <strong>mínima</strong> -{" "}
                  {selectedPlants[input.plantName].min_humid} %
                </Text>
                <Text textAlign={"center"}>
                  Umidade <strong>máxima</strong> -{" "}
                  {selectedPlants[input.plantName].max_humid} %
                </Text>
              </Box>
            </HStack>
            <MultiLineChart data={gardenData.history} />
          </VStack>
        </GridItem>
      ) : (
        <PageHeading>Erro ao carregar detalhes das plantas</PageHeading>
      )}
    </>
  );
}

export default GardenDetails;
