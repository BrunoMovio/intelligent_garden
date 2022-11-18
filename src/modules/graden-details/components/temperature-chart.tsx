import GaugeChart from "react-gauge-chart";
import { Box, Heading } from "@chakra-ui/react";

function TemperatureChart(props: { value: number; min: number; max: number }) {
  const min = props.min / 100;
  const max = (100 - props.max) / 100;
  return (
    <Box>
      <Heading>Temperatura</Heading>
      <GaugeChart
        id="gauge-chart4"
        nrOfLevels={3}
        arcsLength={[min, 1 - (max + min), max]}
        colors={["#040DF3", "#109B49", "#FF0000"]}
        cornerRadius={3}
        percent={props.value}
        formatTextValue={(value) => `${value} C°`}
      />
    </Box>
  );
}

export default TemperatureChart;
