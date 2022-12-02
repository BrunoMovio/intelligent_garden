import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
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
  time: string;
  temp: number;
  humid: number;
}

function MultiLineChart(props: { data: LineChartProps[] }) {
  console.log("props", props);
  const mappedHistory = props.data.map((data) => {
    return {
      name: `${dayjs(new Date(Number(data.time) * 1000)).format("hh:mm")} `,
      temperatura: data.temp,
      umidade: data.humid,
    };
  });

  return (
    <Box>
      <Text>Últimas 10 horas</Text>

      <LineChart
        width={600}
        height={300}
        data={mappedHistory}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          type="monotone"
          dataKey="temperatura"
          stroke="#8884d8"
          dot={false}
        />
        <Line type="monotone" dataKey="umidade" stroke="#82ca9d" dot={false} />
        <CartesianGrid stroke="#eee" strokeDasharray="3 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </Box>
  );
}

export default MultiLineChart;
