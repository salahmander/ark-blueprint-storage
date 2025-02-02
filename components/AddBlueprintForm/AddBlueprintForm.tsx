"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

import CustomCombobox from "@/components/CustomCombobox/CustomCombobox";
import CustomSelect from "@/components/CustomSelect/CustomSelect";

import { ITEM_CATEGORY } from "@/lib/items/items";
import { CATEGORISED_WEAPONS } from "@/lib/items/weapon";
import { CATEGORISED_SADDLES } from "@/lib/items/saddles";
import { blueprintQualitiesAndColors } from "@/lib/blueprintQuality";

const AddBlueprintForm = () => {
  const [selectedQuality, setSelectedQuality] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectWeapon, setSelectWeapon] = useState<string>("");
  const [selectSaddle, setSelectSaddle] = useState<string>("");

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
