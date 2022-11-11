import GaugeChart from "react-gauge-chart";
import { Box, Heading } from "@chakra-ui/react";

function MoistureChart(props: { value: number }) {
  return (
    <Box>
      <Heading>Umidade</Heading>
      <GaugeChart
        id="gauge-chart4"
        nrOfLevels={10}
        arcPadding={0.1}
        cornerRadius={3}
        percent={props.value}
      />
    </Box>
  );
}

export default MoistureChart;
