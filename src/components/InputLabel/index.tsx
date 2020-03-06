import React from "react";
import { Label, Input } from "./styles";

interface Props {
  id: string;
  children?: JSX.Element;
  onChange: Function;
  required?: boolean;
  type?: string;
  placeholder?: string;
}

export const InputLabel: React.FC<Props> = ({
  id,
  children,
  onChange,
  ...rest
}) => {
  return (
    <Label htmlFor={id}>
      {children}
      <Input {...rest} onChange={e => onChange(e.target.value)} />
    </Label>
  );
};

InputLabel.defaultProps = {
  children: undefined,
  type: "text"
};
