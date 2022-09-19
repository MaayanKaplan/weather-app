import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";
import Button from "../../Common/Button/Button";

export const Container = styled.div`
  padding: 0 0 85px;
  height: 100%;
  overflow-y: scroll;
`;

export const ErrorWrapper = styled.div`
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
export const DataContainer = styled.div`
  margin: 120px 378px 0 370px;

  @media ${deviceSize.tablet} {
    margin: 64px 58px 0 50px;
  }

  @media ${deviceSize.mobile} {
    margin: 0;
  }
`;

export const FiveDaysForecastButton = styled(Button)`
  @media ${deviceSize.mobile} {
    display: flex;
    order: -1;
    padding: 16px 24px;
    margin: 0 auto 48px auto;
  }
`;

export const MapButton = styled(Button)`
  display: flex;
  margin: 0 auto 30px auto;
  padding: 16px 24px;
`;
export const BtnContentWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const BtnIconWrapper = styled.div``;

export const BtnText = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.2;
  color: #222;
`;
