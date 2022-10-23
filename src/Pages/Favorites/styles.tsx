import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";
import Toast from "../../Common/Toast/Toast";

export const MainContainer = styled.div`
  margin: 120px 0;
  height: 100%;
  overflow-x: scroll;

  @media ${deviceSize.mobile} {
    margin: 32px 0 0 0;
  }
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

export const EmptyStateWrapper = styled.div`
  margin-top: 75px;
`;

export const FavoritesWrapper = styled.div`
  margin-top: 65px;
  margin: 65px 0 200px 0;
`;

export const Favorite = styled.div``;

export const EachCityWrapper = styled.div``;

export const FavoriteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 291px 0 372px;

  @media ${deviceSize.tablet} {
    margin: 30px 50px 0 52px;
  }

  @media ${deviceSize.mobile} {
    margin: 16px 35px;
  }
`;

export const CityName = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  color: #fff;
  margin-bottom: 4px;

  @media ${deviceSize.mobile} {
    font-size: 2.4rem;
    font-weight: 500;
  }
`;

export const CountryName = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.25;
  color: #fff;

  @media ${deviceSize.mobile} {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media ${deviceSize.mobile} {
    width: 32px;
    height: 32px;
  }
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

export const RemoveFavNotification = styled(Toast)`
  color: #fff;
  position: absolute;
  bottom: 54px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
  font-weight: 300;
  width: 493px;
  padding: 22px 32px;

  @media ${deviceSize.mobile} {
    width: 327px;
    font-size: 1.4rem;
    font-weight: 400;
    padding: 24px 32px;

    bottom: 128px;
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

export const LoadingText = styled.span`
  color: #fff;
  font-size: 2rem;
`;
