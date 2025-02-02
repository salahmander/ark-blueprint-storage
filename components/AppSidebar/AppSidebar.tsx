"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import MultiSelectCombobox from "@/components/MultiSelectComboBox/MultiSelectComboBox";

import { CATEGORISED_SADDLES } from "@/lib/items/saddles";
import { CATEGORISED_WEAPONS } from "@/lib/items/weapon";
import { blueprintQualitiesAndColors } from "@/lib/blueprintQuality";

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const qualityOptions = blueprintQualitiesAndColors.map((quality) => ({
    value: quality.name,
    label: quality.english_name,
  }));

  const saddleOptions = CATEGORISED_SADDLES.map((saddle) => ({
    value: saddle.name,
    label: saddle.english_name,
  }));

  const weaponOptions = CATEGORISED_WEAPONS.map((weapon) => ({
    value: weapon.name,
    label: weapon.english_name,
  }));

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h1 className="text-lg font-semibold">ARK: Blueprint Filters</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <h2 className="text-lg font-semibold mb-2">Blueprint Filter</h2>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="Quality">Quality</Label>
                <MultiSelectCombobox
                  items={qualityOptions}
                  placeholder="Search quality..."
                />
              </div>
              <div>
                <Label htmlFor="Saddle">Saddles</Label>
                <MultiSelectCombobox
                  items={saddleOptions}
                  placeholder="Search saddles..."
                />
              </div>
              <div>
                <Label htmlFor="Weapon">Weapons</Label>
                <MultiSelectCombobox
                  items={weaponOptions}
                  placeholder="Search weapons..."
                />
              </div>
              <Button type="submit" className="w-full">
                Search
              </Button>
            </form>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
