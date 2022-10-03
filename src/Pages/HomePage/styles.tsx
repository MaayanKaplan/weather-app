import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";

export const Container = styled.div`
  padding: 0 0 85px;
  margin-top: 120px;
  height: 100%;
  overflow-y: scroll;

  @media ${deviceSize.mobile} {
    margin-top: 0;
  }
`;

export const ErrorWrapper = styled.div`
  width: 380px;
  margin: 200px auto 0 auto;

  @media ${deviceSize.tablet} {
    margin: 52px auto 0 auto;
  }

  @media ${deviceSize.mobile} {
    margin: 0 auto;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  margin-top: 120px;
`;

export const LoadingText = styled.p`
  font-size: 2rem;
  color: #fff;
`;
