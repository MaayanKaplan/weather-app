import styled from "styled-components/macro";

export const MainEmptyContainer = styled.div`
  height: 100vh;
  padding-top: 66px;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyStateImg = styled.img`
  margin-bottom: 24px;
`;

export const EmptyStateTitle = styled.h2`
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 16px; ;
`;

interface Props {
  modal?: boolean;
}

export const EmptyStateDescription = styled.p<Props>`
  font-size: 1.8rem;
  line-height: 1.5;
  text-align: center;
  padding: 0 30px;

  color: ${(props) => (props.modal ? "#444e72" : "#fff")};
`;
