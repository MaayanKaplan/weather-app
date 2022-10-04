import * as S from "./styles";
import EmptyStateContainer from "../../Components/EmptyStateContainer/EmptyStateContainer";
import NoLocationImg from "../../Images/location.svg";
import { useGeoLocation } from "use-geo-location";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Home from "../../Components/Home/Home";
import { useMedia } from "../../hooks/useMedia";
import SetupLocationMobile from "../../Common/SetupLocationMobile/SetupLocationMobile";

const HomePage = (locationKey: any) => {
  const { error, loading } = useGeoLocation();
  const params = useParams();
  const isMobile = useMedia();

  if (loading)
    return (
      <S.Container>
        <S.LoadingContainer>
          <TailSpin width="80" height="80" color="#fff" />
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      </S.Container>
    );

  return (
    <S.Container>
      {error?.code! === 1 ? (
        <>
          {isMobile ? (
            <SetupLocationMobile />
          ) : (
            <S.ErrorWrapper>
              <EmptyStateContainer
                img={NoLocationImg}
                title="Set up location"
                description="To identify your location please allow
                            WeatherApp to know your location."
                color="white"
              />
            </S.ErrorWrapper>
          )}
        </>
      ) : (
        <Home params={params} locationKey={locationKey?.locationKey} />
      )}
    </S.Container>
  );
};

export default HomePage;
