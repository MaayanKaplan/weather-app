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

  if (error?.code === 1)
    return (
      <S.Container>
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
      </S.Container>
    );

  return (
    <S.Container>
      {loading ? (
        <S.LoadingContainer>
          <TailSpin width="80" height="80" color="#fff" />
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      ) : (
        <Home params={params} locationKey={locationKey?.locationKey} />
      )}
    </S.Container>
  );
};

export default HomePage;
