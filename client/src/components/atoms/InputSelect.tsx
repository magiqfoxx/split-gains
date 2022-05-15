import { ChangeEvent } from "react";
import styled from "styled-components";

type StyledInputSelectProps = {
  readonly disabled?: boolean;
  readonly error?: boolean | "";
  readonly onChange: any; //(e: ChangeEvent<any>): void; <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;
  readonly onBlur?: any;
  readonly value?: string | number;
  readonly type?: string;
  readonly name: string;
  readonly id?: string;
  readonly defaultValue?: string | number;
};

export const StyledInputSelect = styled.select<StyledInputSelectProps>`
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

interface InputSelectProps {
  options?: { key: string; value: string | number }[];
  value?: string | number;
  name: string;
  id?: string;
  disabled?: boolean;
  error?: boolean | "";
  onChange: any; //(e: ChangeEvent<any>): void; <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;;
  onBlur?: any;
  defaultValue?: string | number;
}

const InputSelect = ({
  options,
  value,
  name,
  id,
  disabled,
  error,
  onChange,
  onBlur,
  defaultValue,
}: InputSelectProps) => {
  return (
    <>
      <StyledInputSelect
        name={name}
        id={id || name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
      >
        {options && options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </StyledInputSelect>
    </>
  );
};

export default InputSelect;
