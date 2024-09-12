import {
  SelectShad,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/selectShad";

interface SelectProps {
  items: string[];
  label: string;
  placeholder: string;
  onChange(value: string): void;
}

const Select = ({ items, label, placeholder, onChange }: SelectProps) => {
  return (
    <SelectGroup>
      <SelectLabel>{label}</SelectLabel>
      <SelectShad onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectShad>
    </SelectGroup>
  );
};

export { Select };
