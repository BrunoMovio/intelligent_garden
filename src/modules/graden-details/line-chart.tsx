import { Box, Text } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export interface LineChartProps {
  name: string;
  temperatura: number;
  umidade: number;
}

function MultiLineChart(props: { data: LineChartProps[] }) {
  return (
    <Box>
      <Text>Últimas 10 horas</Text>

      <LineChart
        width={600}
        height={300}
        data={props.data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          type="monotone"
          dataKey="temperatura"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="umidade"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </Box>
  );
}

export default MultiLineChart;
