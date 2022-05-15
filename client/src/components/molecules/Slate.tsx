import { ReactNode } from "react";
import styled from "styled-components";

type StyledSlateProps = {
  readonly disabled?: boolean;
};

export const StyledSlate = styled.div<StyledSlateProps>`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid white;
  border-color: ${(props) =>
    props.disabled ? props.theme.grey : props.theme.primaryLight};
  color: ${(props) => props.theme.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledImage = styled.img`
width:300px;
height:auto;
`;

interface SlateProps {
  img: string;
  text?: string;
  button?: ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Slate = ({ img, text, button, disabled, children }: SlateProps) => {
  return (
    <StyledSlate disabled={disabled}>
      <StyledImage src={img} />
      {text && <p>{text}</p>}
      {button && button}
    </StyledSlate>
  );
};

export default Slate;
