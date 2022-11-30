import { Heading, HStack, VStack, Box, Text, Spinner } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import MultiLineChart from "./components/line-chart";
import TemperatureChart from "./components/temperature-chart";
import MoistureChart from "./components/moisture-chart";
import useGardenDetails from "./garden-details.uc";
import { PageHeading } from "../../commom/components/typography/page-heading.component";
// import useGardenParams from "./garden-params.uc";
import { usePlant } from '../../contexts/plant';

function GardenDetails(input: { plantName: string }) {
  const {
    gardenData,
    current,
    isLoading: isLoadingDetails,
  } = useGardenDetails(input.plantName);
  const { plantParams } = usePlant();
  // const { gardenParams, isLoading: isLoadingParams } = useGardenParams(
  //   input.plantName
  // );

  if (!gardenData || isLoadingDetails)
    return <Spinner />;

    console.log({gardenData})
  return (
    <>
      {gardenData ? (
        <GridItem colSpan={3}>
          <VStack textAlign="center">
            <Heading fontSize="30px">{gardenData.name}</Heading>
            <HStack>
              <Box>
                <VStack>
                  <TemperatureChart
                    value={(current?.temp || 0) / 100}
                    max={plantParams.max_temp}
                    min={plantParams.min_temp}
                  />
                  <MoistureChart
                    value={(current?.humid || 0) / 100}
                    max={gardenParams.max_humid}
                    min={gardenParams.min_humid}
                  />
                </VStack>
              </Box>
              <Box w={"240px"}>
                <Text textAlign={"justify"}>{gardenParams.desc}</Text>
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
