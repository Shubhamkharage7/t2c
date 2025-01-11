import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ data, lines, xKey }) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      {lines.map(({ dataKey, stroke, name }) => (
        <Line
          key={dataKey}
          type="monotone"
          dataKey={dataKey}
          stroke={stroke}
          name={name}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
