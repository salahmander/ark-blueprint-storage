export type BlueprintQuality =
  | "Ascendant"
  | "Mastercraft"
  | "Journeyman"
  | "Ramshackle"
  | "Primitive";

export type Resource = {
  name: string;
  quantity: string;
  icon: string;
};

export type Blueprint = {
  armor: number;
  category: string;
  damage: number;
  durability: number;
  featured: boolean;
  id: number;
  image: string;
  name: string;
  quality: BlueprintQuality;
  resources: Resource[];
};
