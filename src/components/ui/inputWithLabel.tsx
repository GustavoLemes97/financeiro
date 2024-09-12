import { Input } from "./input";
import { Label } from "./label";

interface InputWithLabelProps {
  onChange: React.ChangeEventHandler;
  labelName: string;
  type: string;
  id: string;
  placeholder: string;
}

const InputWithLabel = ({
  onChange,
  labelName,
  type,
  id,
  placeholder,
}: InputWithLabelProps) => {
  return (
    <section>
      <Label htmlFor={id}>{labelName}</Label>
      <Input
        type={type}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
      />
    </section>
  );
};

export { InputWithLabel };
