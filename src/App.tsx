import CryptoTable from "./components/CryptoTable";
import PriceUpdater from "./components/PriceUpdater";
import './styles/CryptoTable.css';
const App = () => {
  return (
    <div className="page-wrapper">
      <PriceUpdater />
      <h1 className="page-heading">Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;
