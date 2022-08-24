import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";
import PopUp from "../../Common/PopUp/PopUp";

export const MainContainer = styled.div`
  height: 100vh;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;

export const StyledTitle = styled.h1`
  margin: 80px 0 0 370px;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-family: Overpass;
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: normal;
  color: #fff;

  @media ${deviceSize.tablet} {
    margin: 64px 0 0 50px;
  }

  @media ${deviceSize.mobile} {
    margin: 0 0 0 30px;
    padding-top: 6px;
    font-size: 3.2rem;
  }
`;

export const FavoritesWrapper = styled.div`
  margin-top: 65px;
`;

export const Favorite = styled.div``;

export const EachCityWrapper = styled.div``;

export const FavoriteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 65px 291px 0 372px;

  @media ${deviceSize.tablet} {
    margin: 65px 50px 0 52px;
  }

  @media ${deviceSize.mobile} {
    margin: 56px 35px 0 35px;
  }
`;

export const CityName = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 4px;
`;

export const CountryName = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.25;
  color: #fff;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

export const Separator = styled.div`
  height: 1px;
  opacity: 0.6;
  background-color: #fff;

  margin: 14px 295px 24px 372px;
  margin-top: 14px;

  @media ${deviceSize.tablet} {
    margin: 14px 54px 0 52px;
  }

  @media ${deviceSize.mobile} {
    margin: 16px 0;
  }
`;

export const MenuPopUp = styled(PopUp)``;

export const LogoutPopUp = styled(PopUp)``;
