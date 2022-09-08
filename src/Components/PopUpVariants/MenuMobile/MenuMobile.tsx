import * as S from "./styles";
import { MenuMobileProps } from "./types";
import Switch from "../../../Common/Switch";
import {
  IconLogoutDark,
  IconDarkMoon,
  IconDarkSun,
} from "../../../Common/Icon/Icon";

import { useToggleTheme } from "../../../App";
import { useTheme } from "styled-components/macro";

const MenuMobile: React.FC<MenuMobileProps> = ({ buttonAction }) => {
  const { toggleTheme } = useToggleTheme();
  const theme = useTheme();

  return (
    <>
      <S.SwitchesContainer>
        <S.ChangeWrapper>
          <S.ChangeTitle>Change mode</S.ChangeTitle>
          <Switch
            id={"darkmode-id"}
            left={<IconDarkSun />}
            right={<IconDarkMoon />}
            onChange={toggleTheme}
            checked={theme.mode === "light"}
          />
        </S.ChangeWrapper>
        <S.ChangeWrapper>
          <S.ChangeTitle>Change degrees</S.ChangeTitle>
          <Switch
            id={"temperature-id"}
            left={"F°"}
            right={"C°"}
            onChange={() => {}}
            checked={true}
          />
        </S.ChangeWrapper>
      </S.SwitchesContainer>

      <S.ButtonWrapper onClick={buttonAction}>
        <IconLogoutDark />
        Log out
      </S.ButtonWrapper>
    </>
  );
};

export default MenuMobile;
