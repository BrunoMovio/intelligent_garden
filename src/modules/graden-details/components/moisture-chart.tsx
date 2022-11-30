import GaugeChart from "react-gauge-chart";
import { Box, Heading, Text } from "@chakra-ui/react";

function MoistureChart(props: { value: number; min: number; max: number }) {
  const min = props.min / 100;
  const max = (100 - props.max) / 100;

  const dryWarning = <Text color="red">Umidade abaixo do ideal para esta espécie</Text>
  const wetWarning = <Text color="red">Umidade acima do ideal para esta espécie</Text>

  return (
    <Box>
      <Heading>Umidade</Heading>
      <Text>{props.value*100 > props.max ? wetWarning : props.value*100 < props.min ? dryWarning : null}</Text>
      <GaugeChart
        id="gauge-chart4"
        nrOfLevels={3}
        arcsLength={[min, 1 - (max + min), max]}
        colors={["#040DF3", "#109B49", "#FF0000"]}
        cornerRadius={3}
        percent={props.value}
      />
    </Box>
  );
}

export default MoistureChart;
