export type category = "Café" | "Padaria" | "Restaurante" | "Loja" | "Serviço";

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Business {
  id: string;
  name: string;
  category: category;
  description: string;
  rating: number;
  distance: number; // in kilometers
  openingHours: string; // e.g., "Seg-Sáb: 6h às 20h"
  products: Product[];
}

export type RootStackParamList = {
  Home: undefined;
  Details: { businessId: string };
};