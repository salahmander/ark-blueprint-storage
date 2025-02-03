"use server";

import connectDB from "@/config/database";
import Blueprints from "@/models/Blueprints";
import { revalidatePath } from "next/cache";

const addBlueprint = async (formData: FormData) => {
  await connectDB();

  const resourcesString = formData.get("resources") as string;
  const resources = JSON.parse(resourcesString);

  const blueprintData = {
    name: formData.get("name"),
    quality: formData.get("quality"),
    category: formData.get("category"),
    durability: formData.get("durability"),
    damage: formData.get("damage"),
    armor: formData.get("armor"),
    resources,
    is_featured: formData.get("featured") === "on",
  };

  const newBlueprint = new Blueprints(blueprintData);
  await newBlueprint.save();

  revalidatePath("/", "layout");
};

export default addBlueprint;
