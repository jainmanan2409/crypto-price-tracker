import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePrices } from "../store/cryptoSlice"; 

const PriceUpdater: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch]);

  return null;
};

export default PriceUpdater;
