export type Portfolio = {
  id: number;
  user_id: number;
  total_value: number;
  risk_level: string;
  created_at: string;
  updated_at: string;
  performance: number;
};

export type Asset = {
  id: number;
  asset_name: string;
  ticker: string;
  quantity: number;
  purchase_price: number;
  current_price: number;
  value: number;
};

export type Transaction = {
  id: number;
  transaction_type: string;
  quantity: number;
  price: number;
  total_value: number;
  transaction_date: string;
};
