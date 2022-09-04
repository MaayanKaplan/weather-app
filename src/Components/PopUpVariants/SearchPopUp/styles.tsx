import styled from "styled-components/macro";
import deviceSize from "../../../Utils/deviceSize";

export const Container = styled.div`
  height: 803px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const BackIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 36px;
  left: 30px;
`;

export const SearchWrapper = styled.div`
  margin-top: 16px;
`;

export const EntryState = styled.div`
  display: none;
  height: 174px;
  z-index: 1;

  @media ${deviceSize.mobile} {
    display: block;
  }
`;
