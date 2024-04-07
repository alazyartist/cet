interface DexPair {
  schemaVersion: string;
  pairs: Pair[];
  pair: Pair | null;
}

interface Pair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: Token;
  quoteToken: Token;
  priceNative: string;
  priceUsd: string;
  txns: Transactions;
  volume: Volume;
  priceChange: PriceChange;
  liquidity: Liquidity;
  fdv: number;
}

interface Token {
  address?: string;
  name?: string;
  symbol: string;
}

interface Transactions {
  h24: TransactionDetails;
  h6: TransactionDetails;
  h1: TransactionDetails;
  m5: TransactionDetails;
}

interface TransactionDetails {
  buys: number;
  sells: number;
}

interface Volume {
  h24: number;
  h6: number;
  h1: number;
  m5: number;
}

interface PriceChange {
  h24: number;
  h6: number;
  h1: number;
  m5: number;
}

interface Liquidity {
  usd: number;
  base: number;
  quote: number;
}
