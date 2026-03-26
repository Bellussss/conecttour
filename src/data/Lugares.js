// Importação de assets (Imagens)
import praia from "../assets/praia.jpg";
import restaurante from "../assets/restaurante.jpg";
import hotel from "../assets/hotel.jpg";
import parque from "../assets/parque.jpg";

/**
 * Array de dados dos lugares. 
 * Exportamos como 'lugaresData' para ser usado no App.js ou em uma Listagem.
 */
export const lugaresData = [
  { 
    id: 1, 
    title: "Praia do Sol", 
    category: "Natureza", 
    banner: praia,
    description: "Uma praia paradisíaca com águas cristalinas." 
  },
  { 
    id: 2, 
    title: "Restaurante Sabor", 
    category: "Gastronomia", 
    banner: restaurante,
    description: "O melhor da culinária local com ingredientes frescos."
  },
  { 
    id: 3, 
    title: "Hotel Lux", 
    category: "Hospedagem", 
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