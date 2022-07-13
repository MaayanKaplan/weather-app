import React from "react";
import styled from "styled-components";
import { IconWarning } from "../Common/Icon";

type Props = {
  // description: string;
  img: string;
  title: string | undefined;
};

const WarningBox: React.FC<Props> = () => {
  return (
    <StyledWarningBox>
      {/* <img alt="warning icon" src={IconWarning}></img> */}
      <p>test</p>
    </StyledWarningBox>
  );
};

const StyledWarningBox = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  justify-content: center;
  /* align-items: flex-start; */
  /* margin: 32px 135px; */
  padding: 24px;
  border-radius: 10px;
  background-color: #ffe7e7;
`;

export default WarningBox;
