import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CryptoTable from "./components/CryptoTable";
import PriceUpdater from "./components/PriceUpdater";
import { fetchSparkline } from "./store/coinGecko";
import { AppDispatch } from "./store/index";
import './styles/CryptoTable.css';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const coinIds = ["bitcoin", "ethereum", "tether", "binancecoin", "ripple", "solana"]; 
    coinIds.forEach((id) => dispatch(fetchSparkline(id)));
  }, [dispatch]);

  return (
    <div className="page-wrapper">
      <PriceUpdater />
      <h1 className="page-heading">Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;
