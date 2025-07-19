
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { day: 'Day 1', accuracy: 90, speed: 80, clarity: 85 },
  { day: 'Day 2', accuracy: 92, speed: 78, clarity: 88 },
  { day: 'Day 3', accuracy: 95, speed: 85, clarity: 90 },
];

export default function Chart() {
  return (
    <LineChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis yAxisId="left" orientation="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="red" />
      <Line yAxisId="left" type="monotone" dataKey="speed" stroke="green" />
      <Line yAxisId="right" type="monotone" dataKey="clarity" stroke="blue" />
    </LineChart>
  );
}
