import React from "react";
import styled from "styled-components/macro";
import SearchInput from "../Common/SearchInput/SearchInput";
import { IconSearchWhite } from "../Common/Icon/Icon";
import deviceSize from "../Utils/deviceSize";
import useFavorites from "../hooks/useFavotites";

const Favorites = () => {
  return (
    <Container>
      <StyledTitle>Favorites</StyledTitle>
      <SearchInput
        variant="transparent"
        placeholder="Search from favorite..."
        icon={<IconSearchWhite />}
      />
      <button onClick={useFavorites}>click</button>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const StyledTitle = styled.h1`
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

export default Favorites;
