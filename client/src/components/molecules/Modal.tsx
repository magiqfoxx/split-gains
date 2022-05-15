import { MouseEventHandler } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

type StyledModalProps = {};
export const StyledBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledModal = styled.div<StyledModalProps>`
  padding: ${(props) => props.theme.n * 3}px ${(props) => props.theme.n * 6}px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  background-color: white;
`;
export const StyledTitle = styled.h1`
  width: 300px;
  height: auto;
`;
interface ModalProps {
  title?: string;
  onBlur?: MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}

const Modal = ({ title, onBlur, children }: ModalProps) => {

  return (
    <Portal>
      <StyledBlur onClick={onBlur}>
        <StyledModal onClick={(e)=> e.stopPropagation()}>
          <>
            {title && <StyledTitle>{title}</StyledTitle>}
            {children}
          </>
        </StyledModal>
      </StyledBlur>
    </Portal>
  );
};

interface PortalProps {
  wrapperId?: string;
  children?: React.ReactNode;
}
function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}
const Portal = ({ children, wrapperId = "portal-wrapper" }: PortalProps) => {
  let element = document.getElementById(wrapperId);
  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }
  return createPortal(children, element);
};

export default Modal;
