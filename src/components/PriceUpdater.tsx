import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePrices } from "../store/cryptoSlice";

const PriceUpdater: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices()); // ✅ No need to pass arguments unless your action expects them
    }, 1500); // Updates every 1.5 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  return null;
};

export default PriceUpdater;