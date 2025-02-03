"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import CustomCombobox from "@/components/CustomCombobox/CustomCombobox";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import DynamicCombobox from "@/components/DynamicCombobox/DynamicCombobox";

import { ITEM_CATEGORY } from "@/lib/items/items";
import { CATEGORISED_WEAPONS } from "@/lib/items/weapon";
import { CATEGORISED_SADDLES } from "@/lib/items/saddles";
import { blueprintQualitiesAndColors } from "@/lib/blueprintQuality";
import { PlusCircle } from "lucide-react";
import { CATEGORISED_RESOURCES } from "@/lib/items/resource";
import { ScrollArea } from "../ui/scroll-area";

const AddBlueprintForm = () => {
  const [selectedQuality, setSelectedQuality] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectWeapon, setSelectWeapon] = useState<string>("");
  const [selectSaddle, setSelectSaddle] = useState<string>("");
  const [resources, setResources] = useState([
    { id: Date.now(), name: "", quantity: "" },
  ]);

  const categoryOptions = [
    { value: ITEM_CATEGORY.SADDLE, label: ITEM_CATEGORY.SADDLE },
    { value: ITEM_CATEGORY.WEAPON, label: ITEM_CATEGORY.WEAPON },
  ];

  const qualityOptions = blueprintQualitiesAndColors.map((quality) => ({
    label: quality.english_name,
    value: quality.name,
  }));

  const weaponOptions = CATEGORISED_WEAPONS.map((weapon) => ({
    label: weapon.english_name,
    value: weapon.name,
  }));

  const saddleOptions = CATEGORISED_SADDLES.map((saddle) => ({
    label: saddle.english_name,
    value: saddle.name,
  }));

  const resourcesOptions = CATEGORISED_RESOURCES.map((resource) => ({
    label: resource.english_name,
    value: resource.name,
  }));

  const addResource = () => {
    setResources([...resources, { id: Date.now(), name: "", quantity: "" }]);
  };

  const removeResource = (id: number) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };

  const updateResource = (
    id: number,
    field: "name" | "quantity",
    value: string
  ) => {
    setResources(
      resources.map((resource) =>
        resource.id === id ? { ...resource, [field]: value } : resource
      )
    );
  };
  console.log({ resources });
  return (
    <form className="space-y-6">
      <CustomSelect
        options={categoryOptions}
        label="Category"
        placeholder="Select Category"
        onChange={setSelectedCategory}
        value={selectedCategory}
        name="category"
        required
      />
      <CustomSelect
        options={qualityOptions}
        label="Blueprint Quality"
        placeholder="Select Blueprint Quality"
        onChange={setSelectedQuality}
        value={selectedQuality}
        name="quality"
        required
      />
      {selectedCategory === ITEM_CATEGORY.WEAPON && (
        <CustomCombobox
          options={weaponOptions}
          label="Weapon"
          placeholder="Select Weapon"
          onChange={setSelectWeapon}
          value={selectWeapon}
          name="weapon"
          required
        />
      )}
      {selectedCategory === ITEM_CATEGORY.SADDLE && (
        <CustomCombobox
          options={saddleOptions}
          label="Saddle"
          placeholder="Select Saddle"
          onChange={setSelectSaddle}
          value={selectSaddle}
          name="saddle"
          required
        />
      )}
      <div className="flex gap-4">
        <div>
          <Label htmlFor="damage">Damage</Label>
          <Input id="damage" name="damage" type="number" step={0.01} />
        </div>
        <div>
          <Label htmlFor="durability">Durability</Label>
          <Input id="durability" name="durability" type="number" step={0.01} />
        </div>
        <div>
          <Label htmlFor="armor">Armor</Label>
          <Input id="armor" name="armor" type="number" step={0.01} />
        </div>
      </div>
      <div className="space-y-4"></div>
      <div>
        <Label htmlFor="resources">Crafting Resources</Label>
        <ScrollArea className="max-h-[200px] overflow-y-auto">
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <DynamicCombobox
                key={index}
                option={resource}
                options={resourcesOptions}
                onUpdate={(field, value) =>
                  updateResource(resource.id, field, value)
                }
                onRemove={() => removeResource(resource.id)}
                showRemove={resourcesOptions.length > 1}
                optionPlaceholder={"Select Resource"}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addResource}
              className="w-full"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Resource
            </Button>
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
        <div className="items-top flex space-x-2">
          <Checkbox id="featured" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="featured"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Mark as Featured Blueprint
            </label>
            <p className="text-sm text-muted-foreground">
              Select this if the blueprint is considered one of the best
              available
            </p>
          </div>
        </div>
      </div>
      <Button className="w-full" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddBlueprintForm;
