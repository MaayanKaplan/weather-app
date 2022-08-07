import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  height: 80px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(NavLink)``;
