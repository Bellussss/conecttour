import praia from "../assets/praia.jpg";
import restaurante from "../assets/restaurante.jpg";
import hotel from "../assets/hotel.jpg";
import parque from "../assets/parque.jpg";

export const lugaresData = [
  { 
    id: 1, 
    title: "Praia do Sol", 
    category: "Destinos", // Antes era 'Natureza'
    banner: praia,
    description: "Uma praia paradisíaca com águas cristalinas." 
  },
  { 
    id: 2, 
    title: "Restaurante Sabor", 
    category: "Restaurantes", // Antes era 'Gastronomia'
    banner: restaurante,
    description: "O melhor da culinária local com ingredientes frescos."
  },
  { 
    id: 3, 
    title: "Hotel Lux", 
    category: "Hotéis", // Antes era 'Hospedagem' (com acento igual à Sidebar)
    banner: hotel,
    description: "Conforto e elegância para sua estadia."
  },
  { 
    id: 4, 
    title: "Parque Verde", 
    category: "Lazer", 
    banner: parque,
    description: "Área de lazer completa para toda a família."
  },
];