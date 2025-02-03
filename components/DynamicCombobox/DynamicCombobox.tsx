import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Scale } from "lucide-react";
import CustomCombobox, {
  type ComboboxOption,
} from "@/components/CustomCombobox/CustomCombobox";

type DynamicComboboxProps = {
  option: { id: number; name: string; quantity: string };
  options: ComboboxOption[];
  onUpdate: (field: "name" | "quantity", value: string) => void;
  onRemove: () => void;
  showRemove: boolean;
  optionPlaceholder?: string;
};
const DynamicCombobox = ({
  option,
  options,
  onUpdate,
  onRemove,
  showRemove,
  optionPlaceholder = "Select option",
}: DynamicComboboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex-1">
        <CustomCombobox
          options={options}
          value={option.name}
          onChange={(value: string) => onUpdate("name", value)}
          placeholder={optionPlaceholder}
          name={option.name}
          required={true}
        />
      </div>
      <div className="relative">
        <Input
          value={option.quantity}
          onChange={(e) => onUpdate("quantity", e.target.value)}
          placeholder="Quantity"
          className="w-[110px] pl-8"
          required={true}
        />
        <Scale className="h-4 w-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      {showRemove && (
        <Button type="button" variant="ghost" size="icon" onClick={onRemove}>
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default DynamicCombobox;
