export interface ProductData  {
  Name: string;
  UpdatedOn: number; // Excel date format (serial number)
  Prices: string; // String of prices separated by semicolon
  'Rate %': number; // Percentage rate
};

export interface Product {
  name: string;
  updated_at: string; // Date in ISO 8601 format (YYYY-MM-DD)
  prices: number[]; // Array of prices
  rate: number; // Percentage rate
  category: 'product' | 'equipment'; // Category can either be 'product' or 'equipment'
}
