import styled from "styled-components";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

export const StyledFullInput = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.theme.n * 8}px;
`;
export const StyledError = styled.span`
  color: ${(props) => props.theme.error};
  font-size: ${(props) => props.theme.n}px;
  align-self: flex-end;
`;

interface FullInputProps {
  id: string;
  name: string;
  value: string | number;
  type?: string;
  error?: boolean | "";
  errorMessage?: string;
  onChange: any;
  onBlur?: any;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

const FullInput = ({
  id,
  name,
  value,
  type,
  error,
  errorMessage,
  onChange,
  onBlur,
  label,
  required,
  disabled,
  children,
}: FullInputProps) => {
  return (
    <StyledFullInput>
      <Label error={error} required={required} disabled={disabled}>{label}</Label>
      <Input
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        disabled={disabled}
      />
      {error && <StyledError>{errorMessage}</StyledError>}
    </StyledFullInput>
  );
};

export default FullInput;
