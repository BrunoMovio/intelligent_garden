import GaugeChart from "react-gauge-chart";
import { Box, Heading } from "@chakra-ui/react";

function TemperatureChart(props: { value: number }) {
  return (
    <Box>
      <Heading>Temperatura</Heading>
      <GaugeChart
        id="gauge-chart4"
        nrOfLevels={10}
        arcPadding={0.1}
        cornerRadius={3}
        percent={props.value}
        formatTextValue={(value) => `${value} C°`}
      />
    </Box>
  );
}

export default TemperatureChart;
