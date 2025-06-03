import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { CryptoAsset } from "../types/crypto";
import { mockCryptoData } from "../utils/mockData"
import { fetchSparkline } from "./coinGecko";

interface CryptoState {
  assets: CryptoAsset[];
}

const initialState: CryptoState = {
  assets: mockCryptoData, 
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets = state.assets.map((coin) => {
        const priceFluctuation = coin.price * (Math.random() * 0.01 - 0.005);
        const newPrice = coin.price + priceFluctuation;

        const newHistory = [...coin.history7d];
        newHistory.push(newPrice);
        if (newHistory.length > 30) newHistory.shift();

        return {
          ...coin,
          price: newPrice,
          percent1h: (Math.random() * 2 - 1),
          percent24h: (Math.random() * 5 - 2.5),
          percent7d: (Math.random() * 10 - 5),
          volume24h: coin.volume24h + Math.random() * 1000000,
          history7d: newHistory,
        };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSparkline.fulfilled, (state, action: PayloadAction<{ id: string; price: number; history7d: number[] }>) => {
      const { id, price, history7d } = action.payload;
      console.log("✅ Sparkline Fetched:", action.payload); 
      const index = state.assets.findIndex((coin) => coin.id === id);
      if (index !== -1) {
        state.assets[index].price = price;
        state.assets[index].history7d = history7d;
      }
    
    });
  },
});


export const { updatePrices } = cryptoSlice.actions;

export default cryptoSlice.reducer;
