import React from 'react';
import ChartData from '../../hooks/ChartData';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const MyPieChart = () => {
  const [data] = ChartData();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default MyPieChart;
