import styled from "styled-components";
import InputSelect from "../atoms/InputSelect";
import Label from "../atoms/Label";

type StyledFullInputSelectProps = {};

export const StyledFullInputSelect = styled.div<StyledFullInputSelectProps>`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.theme.n * 8}px;
`;
export const StyledError = styled.span`
  color: ${(props) => props.theme.error};
  font-size: ${(props) => props.theme.n}px;
  align-self: flex-end;
`;

interface FullInputSelectProps {
  options?: { key: string; value: string | number }[];
  id: string;
  name: string;
  value?: string | number;
  type?: string;
  error?: boolean | "";
  errorMessage?: string;
  onChange: any;
  onBlur?: any;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: string | number;
  children?: React.ReactNode;
}

const FullInputSelect = ({
  options,
  id,
  name,
  value,
  error,
  errorMessage,
  onChange,
  onBlur,
  label,
  required,
  disabled,
  defaultValue,
  children,
}: FullInputSelectProps) => {
  return (
    <StyledFullInputSelect>
      <Label error={error} required={required}>
        {label}
      </Label>
        <InputSelect
          options={options}
          id={id}
          name={name}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
        />
      {error && <StyledError>{errorMessage}</StyledError>}
    </StyledFullInputSelect>
  );
};

export default FullInputSelect;
