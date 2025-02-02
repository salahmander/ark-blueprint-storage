import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: Option[];
  label: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
  name: string;
  required?: boolean;
};

const CustomSelect = ({
  options,
  label,
  placeholder = "Select an option",
  onChange,
  value,
  name,
  required = false,
}: CustomSelectProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Select
        onValueChange={onChange}
        value={value}
        name={name}
        required={required}
      >
        <SelectTrigger id={name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
