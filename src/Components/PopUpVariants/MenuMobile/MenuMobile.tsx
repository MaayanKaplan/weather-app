import { useState } from "react";
import * as S from "./styles";
import { MenuMobileProps } from "./types";
import Switch from "../../../Common/Switch";
import {
  IconLogoutDark,
  IconDarkMoon,
  IconDarkSun,
} from "../../../Common/Icon/Icon";

import { useToggleTheme } from "../../../App";

const MenuMobile: React.FC<MenuMobileProps> = ({ buttonAction }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const { toggleTheme } = useToggleTheme();

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
          />
        </S.ChangeWrapper>
        <S.ChangeWrapper>
          <S.ChangeTitle>Change degrees</S.ChangeTitle>
          <Switch
            id={"temperature-id"}
            left={"F°"}
            right={"C°"}
            onChange={() => {
              setToggle(!toggle);
            }}
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
