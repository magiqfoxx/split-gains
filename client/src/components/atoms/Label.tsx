import styled from "styled-components";

type StyledLabelProps = {
  readonly disabled?: boolean;
  readonly error?: boolean | "";
};

export const StyledLabel = styled.label<StyledLabelProps>`
  color: ${(props) => (props.error ? props.theme.error : props.theme.dark)};
`;

interface LabelProps {
  required?: boolean;
  disabled?: boolean;
  error?: boolean | "";
  children?: React.ReactNode;
}

const Label = ({ required, disabled, error, children }: LabelProps) => {
  return (
    <StyledLabel error={error} disabled={disabled}>
      {children} {required && "*"}
    </StyledLabel>
  );
};

export default Label;
