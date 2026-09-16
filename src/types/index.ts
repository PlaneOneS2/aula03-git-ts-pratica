export type Category = 'Padaria' | 'Salão' | 'Oficina' | 'Mercado' | 'Farmácia';

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Business {
id: string; // ID do documento no Firestore
name: string;
category: Category;
description: string;
address?: string;
phone?: string;
whatsapp?: string;
rating: number;
distance: number;
openingHours: string;
imageUrl?: string;
products: Product[];
latitude?: number;
longitude?: number;
createdAt?: Date;
}

export type RootStackParamList = {
  Home: undefined;
  Details: { businessId: string };
};