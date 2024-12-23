import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  TooltipProps,
  ResponsiveContainer,
} from "recharts";

interface PieGraphProps {
  data: {
    name: string;
    symbol: string;
    quantity: number;
    price: number;
  }[];
}

// Define colors for each slice
const COLORS = [
  "#4DB5E4", // Light blue
  "#4D8FE4", // Soft greenish blue
  "#336AC2", // Muted blue
  "#253BBD", // Dusty blue
];

// Custom Tooltip
const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "10px",
          color: "#212121",
        }}
      >
        <p>
          <strong>{payload[0].name}</strong>
        </p>
        <p>Quantity: {payload[0].payload.quantity}</p>
        <p>Price: ${payload[0].payload.price.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

// { data }: { data: any }

const PieGraph: React.FC<PieGraphProps> = ({ data }: { data: any[] }) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#212121",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        height: "400px",
        border: "1px solid #313131",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "10px",
          fontSize: "22px",
          fontWeight: "bold",
          borderBottom: "1px solid #313131",
        }}
      >
        <h3>Position</h3>
      </div>
      <div style={{ height: "100%", width: "100%", display: "flex" }}>
        {data.length !== 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                dataKey="price"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                innerRadius={50}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div style={{ margin: "auto", paddingBottom: "44px" }}>
            No Positions to display
          </div>
        )}
      </div>
    </div>
  );
};

export default PieGraph;
