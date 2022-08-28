import styled, { keyframes } from "styled-components/macro";
import {
  DIFF_CLOUD_SIZE_PER_SPEED,
  MAX_CLOUD_SPEED,
  MIN_CLOUD_SIZE,
} from "./types";

const cloudAnimation = keyframes`
    0% { left: 100%;}
    100% { left: -401px}
`;

interface Props {
  positionY: number;
  delayTime: number;
  speed: number;
}
export const Cloud = styled.img<Props>`
  left: 100%;
  position: absolute;
  top: ${(props) => props.positionY}%;
  animation: ${cloudAnimation} ${(props) => props.speed}s linear infinite
    ${(props) => props.delayTime}s;
  width: ${(props) =>
    MIN_CLOUD_SIZE +
    (MAX_CLOUD_SPEED - props.speed) * DIFF_CLOUD_SIZE_PER_SPEED}px;
  z-index: -1;
`;
