import styled from "styled-components/macro";
import deviceSize from "../../../Utils/deviceSize";

export const Container = styled.div`
  width: 476px;
  height: 372px;
  padding: 23px 0 19px;
  border-radius: 30px;
  box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;

  position: fixed;
  top: 274px;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${deviceSize.mobile} {
    top: 250px;
    transform: unset;
    left: 30px;
    border-radius: unset;
    box-shadow: unset;
    width: 100%;
    justify-content: center;
    padding-right: 30px;
    z-index: 1000;
    background-color: #fcfcfc;
  }
`;

export const List = styled.ul`
  padding: 24px 0;
  list-style: none;
  height: 324px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ItemWrapper = styled.div`
  cursor: pointer;

  :hover {
    background-color: #f2f2f2;
    padding: 12px 0;
  }
`;

export const ListItem = styled.li`
  padding: 0 36px;
  height: 30px;
`;

export const City = styled.span`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.5;
  color: #444e72;
`;

export const Country = styled.span`
  font-size: 2rem;
  line-height: 1.5;
  color: #838baa;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

export const LoadingText = styled.p`
  font-size: 2rem;
  color: #444e72;
`;
