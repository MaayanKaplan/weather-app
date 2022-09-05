import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";

export const Container = styled.div`
  padding: 0 0 399px;
  height: 100vh;
`;

export const Wrapper = styled.div`
  width: 380px;
  margin: 200px auto 0 auto;

  @media ${deviceSize.tablet} {
    margin: 52px auto 0 auto;
  }
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
  color: #fff;
`;
