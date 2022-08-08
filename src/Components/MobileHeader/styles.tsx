import styled from "styled-components/macro";
import HeaderLink from "../../Common/HeaderLink";

export const HeaderWrapper = styled.div`
  height: 80px;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px 30px 0 0;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 12px 50px 16px 41px;
`;

export const NavButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 1.4rem;
  color: #fff;

  .header {
    font-size: 1.4rem;
  }
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

export const StyledHeaderLink = styled(HeaderLink)`
  font-size: 1.4rem;
`;

export const Separator = styled.div`
  width: 1px;
  height: 46px;
  margin: 3px 49.5px 3px 46.5px;
  background-color: #fff;
`;
