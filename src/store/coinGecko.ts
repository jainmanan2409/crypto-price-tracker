import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSparkline = createAsyncThunk(
  'crypto/fetchSparkline',
  async (coinId: string) => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&sparkline=true`);
    const data = await res.json();

    return {
      id: coinId,
      price: data.market_data.current_price.usd,
      history7d: data.market_data.sparkline_7d.price,
    };
  }
);
