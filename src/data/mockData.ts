import {Business} from "../types";

export const mockBusinesses: Business[] = [
  {
    id: "1",
    name: "Café do Bairro",
    category: "Café",
    description: "Um café aconchegante no coração do bairro.",
    rating: 4.5,
    distance: 0.3,
    openingHours: 'Seg-Sáb: 6h às 20h',
    products: [
      {
        id: "p1",
        name: "Cappuccino",
        price: 8.5,
      },
      {
        id: "p2",
        name: "Bolo de Cenoura",
        price: 12.0,
      },
    ],
    },
  {
    id: "2",
    name: "Padaria do Bairro",
    category: "Padaria",
    description: "Padaria tradicional com pães fresquinhos todos os dias.",
    rating: 4.7,
    distance: 0.5,
    openingHours: 'Sab-Dom: 6h às 20h',
    products: [
      {
        id: "p3",
        name: "Pão Francês",
        price: 1.5,
      },
    ],
  }
]
