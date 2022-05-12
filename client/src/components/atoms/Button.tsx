import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LinkProps } from "react-router-dom";
import styled from "styled-components";

type StyledButtonProps = {
  readonly variant?: "primary" | "secondary";
  readonly disabled?: boolean;
  readonly as?: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;
  readonly to?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: ${(props) =>
    props.variant === "secondary" ? "white" : props.theme.primaryLight};
  border-color: ${(props) =>
    props.variant === "secondary" ? props.theme.primaryLight : "white"};
  color: ${(props) =>
    props.variant === "secondary" ? props.theme.primaryLight : "white"};
`;

interface ButtonProps {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({ variant = "primary", disabled, children }: ButtonProps) => {
  return (
    <StyledButton variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
