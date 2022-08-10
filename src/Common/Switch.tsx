import styled from "styled-components/macro";

type SwitchProps = {
  id: string;
  left?: React.ReactNode | string;
  right?: React.ReactNode | string;
  value: boolean;
  onChange: () => void;
};

const Switch: React.FC<SwitchProps> = ({
  id,
  value,
  onChange,
  left,
  right,
}) => {
  return (
    <SwitchWrapper onChange={() => onChange()}>
      <SwitchCheckbox id={id} type="checkbox" />
      <IconsWrapper>
        <SwitchLeftThumbWrapper>{left}</SwitchLeftThumbWrapper>
        <SwitchRightThumbWrapper>{right}</SwitchRightThumbWrapper>
      </IconsWrapper>
      <Notch checked={value} htmlFor={id}></Notch>
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

  font-size: 2.2rem;
  color: #444e72;
`;

interface Props {
  checked: boolean;
}
const Notch = styled.label<Props>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #838baa;

  cursor: pointer;
  position: absolute;
  ${(props) =>
    props.checked
      ? `
    top: 3px;
    left: 4px;
  `
      : `
  top: 3px;
  right:4px;`}
`;

const SwitchCheckbox = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 6px 0 5px 8px;
`;
const SwitchLeftThumbWrapper = styled.div`
  height: 24px;
  width: 24px;
`;

const SwitchRightThumbWrapper = styled.div`
  height: 24px;
  width: 24px;
`;

export default Switch;
