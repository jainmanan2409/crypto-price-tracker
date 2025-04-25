import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface MiniChartProps {
  data: number[];
  color: string;
}

const MiniChart: React.FC<MiniChartProps> = ({ data, color }) => {
  const formattedData = data.map((value, index) => ({
    time: index,
    value,
  }));

  return (
    <ResponsiveContainer width="100%" height={50}>
      <LineChart data={formattedData} margin={{ top: 5, bottom: 5, left: 0, right: 0 }}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={1.8}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MiniChart;
