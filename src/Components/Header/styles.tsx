import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";
import NavBar from "../../Common/NavBar/NavBar";
import SearchInput from "../../Common/SearchInput/SearchInput";
import Button from "../../Common/Button/Button";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  height: 94px;
  width: 100%;

  padding: 0px 70px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: #48bae4;
  display: flex;
  align-items: center;
  /* 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center; */

  gap: 10px;

  @media (max-width: ${deviceSize.tablet}) {
    padding: 0 50px;
  }
`;

export const LeftSideContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 35%;
  height: 100%;
  align-items: center;
`;

export const LogoWrapper = styled.div``;

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
`;

export const StyledSearchInput = styled(SearchInput)`
  width: 372px;
`;

export const RightSideContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  width: 35%;

  @media ${deviceSize.tablet} {
    margin-left: 40px;
  }
`;

export const StyledButton = styled(Button)`
  padding: 0;
  border: none;
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled(NavLink)``;

export const Text = styled(NavLink)`
  font-weight: normal;
  color: #fff;

  @media ${deviceSize.tablet} {
    display: none;
  }
`;

export const SwitchesWrapper = styled.div`
  display: flex;
  gap: 30px;
  /* margin: 27px 68px 27px 81px; */

  @media ${deviceSize.tablet} {
    order: -1;
    margin: 27px 96px 27px 0;
  }
`;

// export const LastLinkWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   @media ${deviceSize.tablet} {
//     margin-left: 32px;
//   }
// `;
