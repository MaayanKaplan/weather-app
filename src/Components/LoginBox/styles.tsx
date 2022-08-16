import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";
import Button from "../../Common/Button/Button";

export const FormContainer = styled.form`
  width: 732px;
  /* height: 649px; */
  padding: 54px;
  border-radius: 30px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  margin-top: 168px;
  margin-bottom: 169px;

  display: flex;
  flex-direction: column;

  position: relative;

  @media ${deviceSize.tablet} {
    width: 508px;
    min-height: 559px;
    padding: 40px 46px;
    margin-top: 120px;
  }

  @media ${deviceSize.mobile} {
    width: 414px;
    min-height: calc(100vh - 135px);
    padding: 54px 30px 85px;
    margin-top: 135px;
    border-radius: 30px 30px 0 0;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  color: #444e72;
  text-align: center;
  margin-bottom: 32px;

  @media ${deviceSize.tablet} {
    margin-bottom: 24px;
  }
  @media ${deviceSize.mobile} {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
  } ;
`;

export const DividerWrapper = styled.div`
  display: flex;
  margin-top: 48px;
  gap: 16px;
  align-items: center;

  @media ${deviceSize.tablet} {
    margin-top: 32px;
  }
  @media ${deviceSize.mobile} {
    margin-top: 48px;
  } ;
`;

export const Divider = styled.span`
  height: 2px;
  flex-grow: 1;
  background-color: #f2f2f2;
`;

export const StyledDescription = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 auto;
  margin-top: 52px;
  /* padding-bottom: 58px; */
  cursor: pointer;

  @media ${deviceSize.mobile} {
    flex-direction: column;
    gap: 47px;
  } ;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 0;
  gap: 8px;

  @media ${deviceSize.mobile} {
  } ;
`;

export const LoginButton = styled(Button)`
  margin-top: 8px;
`;
