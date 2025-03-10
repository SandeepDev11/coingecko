import React from "react";
import { Treemap, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Stablecoins", size: 217.272, change: -0.04 },
  { name: "Exchange-based Tokens", size: 150, change: -4.58 },
  { name: "Decentralized Finance (DeFi)", size: 120, change: -5.47 },
  { name: "Meme", size: 90, change: -7.88 },
  { name: "Artificial Intelligence (AI)", size: 85, change: -7.77 },
  { name: "Real World Assets (RWA)", size: 80, change: -6.6 },
  { name: "Layer 2 (L2)", size: 75, change: -5.68 },
  { name: "Gaming (GameFi)", size: 70, change: -6.69 },
];

const COLORS = [
  "#FF4D4D",
  "#FF6666",
  "#FF3333",
  "#CC0000",
  "#B20000",
  "#990000",
  "#800000",
  "#660000",
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, size } = payload[0].payload;
    return (
      <div
        style={{
          background: "white",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <strong>{name}</strong>
        <p>Market Cap: €{size.toFixed(3)}B</p>
      </div>
    );
  }
  return null;
};

const CryptoTreemap = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        background: "#fff",
        // padding: "20px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          width="100%"
          height={500}
          data={data}
          dataKey="size"
          fill="#FF4D4D"
          content={({ root, x, y, width, height, index }) => {
            const d = root.children[index];
            return (
              <g>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={COLORS[index % COLORS.length]}
                  stroke="#fff"
                />
                <text x={x + 5} y={y + 20} fill="white" fontSize={14}>
                  {d.name}
                </text>
                <text x={x + 5} y={y + 40} fill="white" fontSize={12}>
                  {d.change}%
                </text>
              </g>
            );
          }}
        />
        <Tooltip content={<CustomTooltip />} />
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoTreemap;
