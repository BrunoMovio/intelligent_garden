import { Heading, HStack, VStack, Box, Text } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import MultiLineChart, { LineChartProps } from "./line-chart";
import GaugeChart from "react-gauge-chart";
import TemperatureChart from "./temperature-chart";
import MoistureChart from "./moisture-chart";

function GardenDetails(props: {
  name: string;
  history: LineChartProps[];
  curTemp: number;
  curMois: number;
}) {
  return (
    <GridItem colSpan={3}>
      <VStack textAlign="center">
        <Heading fontSize="30px">{props.name}</Heading>
        <HStack>
          <Box>
            <VStack>
              <TemperatureChart value={props.curTemp / 100} />
              <MoistureChart value={props.curMois / 100} />
            </VStack>
          </Box>
          <Box w={"240px"}>
            <Text textAlign={"justify"}>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
              sobreviveu não só a cinco séculos, como também ao salto para a
              editoração eletrônica, permanecendo essencialmente inalterado.
            </Text>
          </Box>
        </HStack>
        <MultiLineChart data={props.history} />
      </VStack>
    </GridItem>
  );
}

export default GardenDetails;
