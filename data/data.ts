import Allosaurus from "@/assets/dinosaurs/allosaurus.webp";
import Ankylosaurus from "@/assets/dinosaurs/ankylosaurus.webp";
import Araneo from "@/assets/dinosaurs/araneo.webp";
import Argentavis from "@/assets/dinosaurs/argentavis.webp";
import Arthropluera from "@/assets/dinosaurs/arthropluera.webp";
import Baryonyx from "@/assets/dinosaurs/baryonyx.webp";
import Basilosaurus from "@/assets/dinosaurs/basilosaurus.webp";
import Beelzebufo from "@/assets/dinosaurs/beelzebufo.webp";
import Brontosaurus from "@/assets/dinosaurs/brontosaurus.webp";
import Carbonemys from "@/assets/dinosaurs/carbonemys.webp";
import Carcharodontosaurus from "@/assets/dinosaurs/carcharodontosaurus.webp";
import Carnotaurus from "@/assets/dinosaurs/carnotaurus.webp";
import Castoroides from "@/assets/dinosaurs/castoroides.webp";
import Ceratosaurus from "@/assets/dinosaurs/ceratosaurus.webp";
import Chalicotherium from "@/assets/dinosaurs/chalicotherium.webp";
import Daeodon from "@/assets/dinosaurs/daeodon.webp";
import Diplodocus from "@/assets/dinosaurs/diplodocus.webp";

import CementingPaste from "@/assets/items/resources/CementPaste.webp";
import Fiber from "@/assets/items/resources/Fiber.webp";
import Hide from "@/assets/items/resources/Hide.webp";
import MetalIngot from "@/assets/items/resources/MetalIngot.webp";
import SilicaPearls from "@/assets/items/resources/SilicaPearls.webp";

import type { Blueprint } from "@/types/index.types";
import { v4 as uuidv4 } from "uuid";
export const BLUEPRINTS = [
  {
    id: uuidv4(),
    featured: false,
    name: "Allosaurus",
    image: Allosaurus,
    quality: "Ascendant",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Ankylosaurus",
    image: Ankylosaurus,
    quality: "Mastercraft",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Araneo",
    image: Araneo,
    quality: "Journeyman",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Argentavis",
    image: Argentavis,
    quality: "Ramshackle",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Arthropluera",
    image: Arthropluera,
    quality: "Primitive",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Baryonyx",
    image: Baryonyx,
    quality: "Ascendant",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Basilosaurus",
    image: Basilosaurus,
    quality: "Journeyman",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Beelzebufo",
    image: Beelzebufo,
    quality: "Ramshackle",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Brontosaurus",
    image: Brontosaurus,
    quality: "Primitive",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Carbonemys",
    image: Carbonemys,
    quality: "Ascendant",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Carcharodontosaurus",
    image: Carcharodontosaurus,
    quality: "Mastercraft",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Carnotaurus",
    image: Carnotaurus,
    quality: "Journeyman",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Castoroides",
    image: Castoroides,
    quality: "Ramshackle",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Ceratosaurus",
    image: Ceratosaurus,
    quality: "Primitive",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Chalicotherium",
    image: Chalicotherium,
    quality: "Ascendant",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Daeodon",
    image: Daeodon,
    quality: "Mastercraft",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
  {
    id: uuidv4(),
    featured: false,
    name: "Diplodocus",
    image: Diplodocus,
    quality: "Journeyman",
    category: "Saddle",
    durability: 0,
    damage: 0,
    armor: 163.3,
    resources: [
      {
        name: "cementing paste",
        icon: CementingPaste,
        quantity: 3181,
      },
      { name: "fiber", icon: Fiber, quantity: 23427 },
      {
        name: "hide",
        icon: Hide,
        quantity: 39334,
      },
      {
        name: "metal ingot",
        icon: MetalIngot,
        quantity: 6478,
      },
      {
        name: "silica pearls",
        icon: SilicaPearls,
        quantity: 8965,
      },
    ],
  },
] as Blueprint[];
