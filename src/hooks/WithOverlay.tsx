import { ComponentType } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface OverlayProps {
  onClickOverlay?: () => void;
  isVisible?: boolean;
}

const WithOverlay =
  <P extends object>(Component: ComponentType<P>) =>
  ({ onClickOverlay, isVisible = false, ...props }: P & OverlayProps) =>
    ReactDOM.createPortal(
      <div style={{ display: isVisible ? "block" : "none" }}>
        <Overlay onClick={onClickOverlay} />
        <Component {...(props as P)} />
      </div>,
      document.getElementById("portal") as HTMLElement
    );
export default WithOverlay;
const Overlay = styled.div<{ isVisible?: boolean }>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
`;
