import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";
import NavBar from "../../Common/NavBar/NavBar";
import SearchInput from "../../Common/SearchInput/SearchInput";

export const HeaderWrapper = styled.header`
  height: 94px;
  width: 100%;
  /* padding-left: 70px; */
  padding: 0px 70px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: #48bae4;
  display: flex;
  align-items: center;

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
  /* padding: 11px 190px 11px 0; */

  @media ${deviceSize.tablet} {
    /* padding: 19px 28px 19px 0; */

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
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  display: flex;
  width: 35%;

  @media ${deviceSize.tablet} {
    margin-left: 40px;
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

export const LastLinkWrapper = styled.div`
  display: flex;
  @media ${deviceSize.tablet} {
    margin-left: 32px;
  }
`;
