import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";
import NavBar from "../../Common/NavBar/NavBar";
import SearchInput from "../../Common/SearchInput/SearchInput";
import Button from "../../Common/Button/Button";
import PopUp from "../../Common/PopUp/PopUp";

// import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  height: 94px;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => {
    return "";
  }};

  display: flex;
  align-items: center;
  gap: 10px;

  z-index: 5;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 35%;
  height: 100%;
  align-items: center;
  padding-left: 70px;

  @media ${deviceSize.tablet} {
    padding-left: 50px;
  }
`;

export const LogoWrapper = styled.div`
  width: 50%;
`;

export const Logo = styled.img`
  width: 110px;
  height: 72px;

  @media ${deviceSize.tablet} {
    width: 86px;
    height: 56px;
  }
`;

export const StyledNavBar = styled(NavBar)`
  width: 100%;
`;

export const SearchInputContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

export const StyledSearchInput = styled(SearchInput)`
  width: 372px;
`;

export const RightSideContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: right;
  align-items: right center;
  /* display: flex;
  justify-content: space-between; */
  width: 35%;
  padding-right: 70px;

  @media ${deviceSize.tablet} {
    width: 25%;
    padding-right: 50px;
  }
`;

export const SwitchToMapButton = styled(Button)`
  display: flex;
  justify-content: center;
  color: #fff;
`;

export const LogoutButton = styled(Button)`
  display: flex;
  justify-content: end;
  color: #fff;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.div``;

export const Text = styled.span`
  font-weight: normal;
  color: #fff;

  @media ${deviceSize.tablet} {
    display: none;
  }
`;

export const SwitchesWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: right;

  @media ${deviceSize.tablet} {
    order: -1;
  }
`;

export const LogoutPopUp = styled(PopUp)`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;
  /* margin: 125px auto 0 auto; */
  position: absolute;
  top: 125px;
`;
