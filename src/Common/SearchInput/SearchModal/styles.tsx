import styled from "styled-components/macro";

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
  z-index: 100;

  overflow-y: scroll;
`;

export const List = styled.ul`
  padding: 24px 36px;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-bottom: 24px;
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
