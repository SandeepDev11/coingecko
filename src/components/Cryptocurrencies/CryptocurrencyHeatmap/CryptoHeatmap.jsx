// CryptoHeatmap.js
import React from "react";
import { ResponsiveContainer, Treemap, Tooltip as RechartsTooltip } from "recharts";
import { Container } from "react-bootstrap";

const data = [
    { name: "Bitcoin", symbol: "BTC", priceChange: 7.42, price: 82188.62, marketCap: 1631, fill: "#15803d" },
    { name: "Ethereum", symbol: "ETH", priceChange: 14.95, price: 5000, marketCap: 600, fill: "#16a34a" },
    { name: "Solana", symbol: "SOL", priceChange: 9.79, price: 150, marketCap: 250, fill: "#22c55e" },
    { name: "Tether", symbol: "USDT", priceChange: 1.26, price: 1.00, marketCap: 110, fill: "#34d399" },
    { name: "XRP", symbol: "XRP", priceChange: 8.50, price: 0.75, marketCap: 90, fill: "#059669" },
    { name: "USD Coin", symbol: "USDC", priceChange: 1.22, price: 1.00, marketCap: 85, fill: "#10b981" },
    { name: "BNB", symbol: "BNB", priceChange: 3.96, price: 450, marketCap: 80, fill: "#4ade80" },
    { name: "Cardano", symbol: "ADA", priceChange: 4.25, price: 0.55, marketCap: 75, fill: "#22c55e" },
    { name: "Avalanche", symbol: "AVAX", priceChange: 6.78, price: 35, marketCap: 65, fill: "#16a34a" },
    { name: "Dogecoin", symbol: "DOGE", priceChange: 2.11, price: 0.15, marketCap: 60, fill: "#3b82f6" },
    { name: "Polkadot", symbol: "DOT", priceChange: 3.45, price: 7.5, marketCap: 55, fill: "#2563eb" },
    { name: "Chainlink", symbol: "LINK", priceChange: 5.76, price: 18, marketCap: 50, fill: "#1d4ed8" },
    { name: "LEO", symbol: "LEO", priceChange: -1.45, price: 3.5, marketCap: 45, fill: "#dc2626" },
    { name: "Litecoin", symbol: "LTC", priceChange: 2.8, price: 95, marketCap: 40, fill: "#60a5fa" },
    { name: "Polygon", symbol: "MATIC", priceChange: 4.3, price: 1.2, marketCap: 38, fill: "#3b82f6" },
    { name: "TRON", symbol: "TRX", priceChange: 1.8, price: 0.11, marketCap: 35, fill: "#06b6d4" },
    { name: "Stellar", symbol: "XLM", priceChange: 3.5, price: 0.13, marketCap: 32, fill: "#0ea5e9" },
    { name: "Toncoin", symbol: "TON", priceChange: 2.2, price: 5.6, marketCap: 30, fill: "#0284c7" },
    { name: "NEAR Protocol", symbol: "NEAR", priceChange: 6.1, price: 8.2, marketCap: 28, fill: "#0369a1" },
    { name: "Aptos", symbol: "APT", priceChange: 7.9, price: 10.1, marketCap: 26, fill: "#075985" }
  ]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const coin = payload[0].payload;
    return (
      <div className="custom-tooltip p-2" style={{ background: "#fff", border: "1px solid #ccc", borderRadius: 4 }}>
        <strong>{coin.name} ({coin.symbol})</strong><br />
        <span style={{ color: coin.priceChange >= 0 ? "#16a34a" : "#dc2626" }}>
          {coin.priceChange >= 0 ? "+" : ""}{coin.priceChange}%
        </span><br />
        <small>Price: €{coin.price.toLocaleString()}</small><br />
        <small>Market Cap: €{(coin.marketCap / 1000).toFixed(3)}T</small>
      </div>
    );
  }
  return null;
};

const CustomizedContent = ({ root, x, y, width, height, index }) => {
  const coin = root.children[index];
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} style={{ fill: coin.fill, stroke: "#fff" }} />
      {width > 60 && height > 40 && (
        <>
          <text x={x + width / 2} y={y + height / 2 - 5} textAnchor="middle" fill="#fff" fontSize={14} fontWeight="bold">
            {coin.symbol}
          </text>
          <text x={x + width / 2} y={y + height / 2 + 15} textAnchor="middle" fill="#fff" fontSize={12}>
            {coin.priceChange >= 0 ? "+" : ""}{coin.priceChange}%
          </text>
        </>
      )}
    </g>
  );
};

const CryptoHeatmap = () => {
  return (
    <div style={{ height: "60vh"}}>
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={data}
          dataKey="marketCap"
          stroke="transparent"
          content={<CustomizedContent />}
        >
          <RechartsTooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoHeatmap;
