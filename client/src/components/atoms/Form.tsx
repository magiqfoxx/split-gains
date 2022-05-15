import styled from "styled-components";

type StyledFormProps = {
  readonly disabled?: boolean;
  readonly onSubmit: () => void;
};

export const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => `${props.theme.n * 3}px ${props.theme.n * 8}px`  };
  color: ${(props) => props.theme.dark};
`;

interface FormProps {
  onSubmit: () => void;
  children?: React.ReactNode;
}

const Form = ({ onSubmit, children }: FormProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
