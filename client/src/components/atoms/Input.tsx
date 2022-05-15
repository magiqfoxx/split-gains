import { ChangeEvent } from "react";
import styled from "styled-components";

type StyledInputProps = {
  readonly disabled?: boolean;
  readonly error?: boolean | "";
  readonly onChange: any; //(e: ChangeEvent<any>): void; <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;
  readonly onBlur?: any;
  readonly value: string | number;
  readonly type?: string;
  readonly name: string;
  readonly id: string;
};

export const StyledInput = styled.input<StyledInputProps>`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid white;
  border-color: ${(props) =>
    props.disabled
      ? props.theme.grey
      : props.error
      ? props.theme.error
      : props.theme.primaryLight};
`;

interface InputProps {
  value: string | number;
  name: string;
  id: string;
  disabled?: boolean;
  error?: boolean | "";
  errorMessage?: string;
  type?: string;
  onChange: any; //(e: ChangeEvent<any>): void; <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;;
  onBlur?: any;
}

const Input = ({
  value,
  name,
  id,
  disabled,
  error,
  type,
  onChange,
  onBlur,
}: InputProps) => {
  return (
      <>
    <StyledInput
      disabled={disabled}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      type={type}
      name={name}
      id={id}
    />
    </>
  );
};

export default Input;
