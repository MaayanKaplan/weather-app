import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";
import Button from "../Button/Button";

export const Container = styled.div`
  position: relative;
  width: 502px;
  /* height: 308px; */

  padding: 32px 32px 48px 48px;
  border-radius: 30px;
  box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;

  @media ${deviceSize.mobile} {
    width: 100%;
    padding: 40px 30px 0;
    box-shadow: 0 -7px 30px 0 rgba(0, 0, 0, 0.16);
    background-color: #fcfcfc;
    border-radius: 30px 30px 0 0;

    position: absolute;
    bottom: 0;
  }
`;

export const Title = styled.h1`
  margin: 16px 14px 16px 0;
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  color: #444e72;

  @media ${deviceSize.mobile} {
    /* margin: 40px 30px 36px; */
    margin: 0;
  }
`;

export const Description = styled.p`
  margin: 16px 56px 48px 0;
  font-size: 1.8rem;
  line-height: 1.5;
  color: #444e72;
`;

export const Link = styled.button`
  /* margin: 64px 24px 16px 14px; */
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  color: #444e72;
  text-decoration: underline;
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  font-size: 1.8rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;
  color: #444e72;
`;

export const CloseIcon = styled.img`
  position: absolute;
  height: 24px;
  width: 24px;
  top: 32px;
  right: 32px;
  cursor: pointer;

  @media ${deviceSize.mobile} {
    display: none;
  }
`;

export const SwitchesContainer = styled.div`
  margin: 43px 0 128px 0;
  display: flex;
  flex-direction: column;
  gap: 49px;
`;

export const ChangeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ChangeTitle = styled.span`
  font-size: 1.8rem;
  line-height: 1.5;
  color: #444e72;
`;

export const SwitchWrapper = styled.div``;

export const PopUpButton = styled(Button)`
  padding: 16px 24px;
  margin: 0;
`;

export const ButtonsWrapper = styled.div`
  /* margin-left: 175px; */
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;
