import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import "../styles/CryptoTable.css";
import MiniChart from "./MiniCharts";

const CryptoTable: React.FC = () => {
  const assets = useSelector((state: RootState) => state.crypto.assets);

  return (
<div className="crypto-table-container">
  <table className="crypto-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Logo</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>1h %</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>Market Cap</th>
        <th>24h Volume</th>
        <th>Circulating Supply</th>
        <th>Last 7 days</th>
      </tr>
    </thead>
    <tbody>
      {assets.map((coin, index) => (
        <tr key={coin.id}>
          <td data-label = "#">{index + 1}</td>
          <td data-label = "Logo"><img src={coin.logo} alt={coin.name} className="h-6 w-6" /></td>
          <td data-label = "Name">{coin.name}</td>
          <td data-label = "Symbol">{coin.symbol}</td>
          <td data-label = "Price">${coin.price.toLocaleString()}</td>
          <td data-label="1h %" className={coin.percent1h >= 0 ? "text-green-500" : "text-red-500"}>
            {coin.percent1h.toFixed(2)}%
          </td>
          <td data-label="24 %" className={coin.percent24h >= 0 ? "text-green-500" : "text-red-500"}>
            {coin.percent24h.toFixed(2)}%
          </td>
          <td data-label="7d %" className={coin.percent7d >= 0 ? "text-green-500" : "text-red-500"}>
            {coin.percent7d.toFixed(2)}%
          </td>
          <td data-label="Market Cap">${coin.marketCap.toLocaleString()}</td>
          <td data-label="24h Volume">${coin.volume24h.toLocaleString()}</td>
          <td data-label="Circulating Supply">{coin.circulatingSupply.toLocaleString()}.{coin.symbol}</td>
          <td data-label="Last 7 days"className="w-[120px] h-[40px] p-1">
  {coin.history7d && (
    <MiniChart
      data={coin.history7d}
      color={coin.percent7d >= 0 ? "#16a34a" : "#dc2626"}
    />
  )}
</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default CryptoTable;
