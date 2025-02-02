"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export type Item = {
  value: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type MultiSelectComboboxProps = {
  items?: Item[];
  placeholder?: string;
  emptyMessage?: string;
  selectMessage?: string;
  selectedMessage?: string | ((count: number) => string);
  onSelectionChange?: (selectedItems: Item[]) => void;
};

const MultiSelectCombobox = ({
  items = [],
  placeholder = "Select items...",
  emptyMessage = "No item found.",
  selectMessage = "Select items...",
  selectedMessage = (count: number) => `${count} selected`,
  onSelectionChange,
}: MultiSelectComboboxProps) => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Item[]>([]);

  const handleSelect = (item: Item) => {
    setSelected((current) => {
      const newSelection = current.some(
        (selectedItem) => selectedItem.value === item.value
      )
        ? current.filter((selectedItem) => selectedItem.value !== item.value)
        : [...current, item];

      onSelectionChange?.(newSelection);
      return newSelection;
    });
  };

  const handleDeselect = (item: Item) => {
    setSelected((current) => {
      const newSelection = current.filter(
        (selectedItem) => selectedItem.value !== item.value
      );
      onSelectionChange?.(newSelection);
      return newSelection;
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selected.length > 0
            ? typeof selectedMessage === "function"
              ? selectedMessage(selected.length)
              : selectedMessage
            : selectMessage}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup className="max-h-64 overflow-auto">
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  onSelect={() => handleSelect(item)}
                >
                  <div className="flex items-center">
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    {item.label}
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selected.some(
                        (selectedItem) => selectedItem.value === item.value
                      )
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
      <div className="flex flex-wrap gap-1 mt-2">
        {selected.map((item) => (
          <Badge
            key={item.value}
            variant="secondary"
            className="flex items-center"
          >
            {item.icon && <item.icon className="mr-1 h-3 w-3" />}
            {item.label}
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 ml-2"
              onClick={() => handleDeselect(item)}
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove</span>
            </Button>
          </Badge>
        ))}
      </div>
    </Popover>
  );
};

export default MultiSelectCombobox;
