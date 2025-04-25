export interface CryptoAsset {
    id: string;
    name: string;
    symbol: string;
    logo: string;
    price: number;
    percent1h: number;
    percent24h: number;
    percent7d: number;
    marketCap: number;
    volume24h: number;
    circulatingSupply: number;
    chart?: string;
    history7d: number[];
  }
  