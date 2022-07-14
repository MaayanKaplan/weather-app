import styled from "styled-components";
import { IconDarkSun, IconDarkMoon } from "./Icon";

type Props = {
  // isActive?: boolean;
  // src?: string | undefined;
  // leftIcon: string;
  // rightIcon: {};
};

const Switch: React.FC<Props> = () => {
  return (
    <SwitchWrapper>
      <IconsWrapper>
        <div>
          <IconDarkSun />
        </div>
        <div>
          <IconDarkMoon />
        </div>
      </IconsWrapper>
      <Notch />
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.div`
  width: 73px;
  height: 40px;
  border-radius: 100px;
  border: solid 1px #444e72;
  background-color: #fff;
  display: flex;
  position: relative;
`;

const IconsWrapper = styled.div`
  display: flex;
  padding: 3px;

  div {
    height: 26px;
    width: 26px;
    margin: 0 6px 2px 2px;
  }
`;

const Notch = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  /* flex-grow: 0; */
  background-color: #838baa;

  transition: transform 0.1s linear;
  cursor: pointer;
  position: absolute;
  top: 3px;
  left: 3px;
`;

export default Switch;

// transform: translate(${p => p.isActive ? '26px' : '1px'});
