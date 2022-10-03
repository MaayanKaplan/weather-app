import * as S from "./styles";
import EmptyStateContainer from "../../Common/EmptyStateContainer/EmptyStateContainer";
import NoLocationImg from "../../Images/location.svg";
import { useGeoLocation } from "use-geo-location";
import { TailSpin } from "react-loader-spinner";

import { getGeoPosition } from "../../api/AccuweatherAPI/AccuweatherAPI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import Home from "../../Components/Home/Home";

const HomePage = (locationKey: any) => {
  const { latitude, longitude, error, loading } = useGeoLocation();
  const params = useParams();

  // const { data: locationKey } = useQuery(
  //   [latitude, longitude],
  //   () => getGeoPosition(latitude, longitude),
  //   {
  //     cacheTime: 600,
  //     staleTime: 600,
  //   }
  // );

  // console.log(locationKey?.locationKey);

  console.log(error?.code);

  return (
    <S.Container>
      {error?.code === 1 && (
        <S.ErrorWrapper>
          <EmptyStateContainer
            img={NoLocationImg}
            title="Set up location"
            description="To identify your location please allow
          WeatherApp to know your location."
          />
        </S.ErrorWrapper>
      )}

      {loading && (
        <S.LoadingContainer>
          <TailSpin width="80" height="80" color="#fff" />
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      )}

      {!error && !loading && (
        <Home params={params} locationKey={locationKey?.locationKey} />
      )}
    </S.Container>
  );
};

export default HomePage;
