import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

type StyledButtonProps = {
  readonly variant?: "primary" | "secondary";
  readonly disabled?: boolean;
  readonly as?: ForwardRefExoticComponent<
    LinkProps & RefAttributes<HTMLAnchorElement>
  >;
  readonly to?: any;
  readonly onClick?: () => void;
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: ${(props) => props.disabled ? "no-drop" : "pointer"};
  font-size: ${(props) => props.theme.n * 3}px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid white;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.variant === "secondary" ? "white" : props.theme.primaryLight};
  border-color: ${(props) =>
    props.variant === "secondary" ? props.theme.primaryLight : "white"};
  color: ${(props) =>
    props.variant === "secondary" ? props.theme.primaryLight : "white"};
`;

interface ButtonProps {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  to?: string;
}

const Button = ({
  variant = "primary",
  disabled,
  children,
  onClick,
  type,
  to,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      type={type}
      to={to}
      as={to ? Link : undefined}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
