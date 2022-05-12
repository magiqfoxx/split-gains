import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LinkProps } from "react-router-dom";
import styled from "styled-components";

type StyledButtonProps = {
  readonly variant?: "primary" | "secondary";
  as?: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>
  to?: string
};

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.variant === "secondary" ? props.theme.secondary : props.theme.primary};
  border: ${(props) =>
    props.variant === "secondary" ? props.theme.primary : props.theme.secondary};
  color: ${(props) =>
    props.variant === "secondary" ? props.theme.primary : props.theme.secondary};
`;

interface ButtonProps  {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

const Button = ({ variant = "primary", children }: ButtonProps) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;
