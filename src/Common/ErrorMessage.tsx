import styled from "styled-components/macro";
import deviceSize from "../Utils/deviceSize";

const ErrorMessage = () => {
  return (
    <ErrorContainer>
      <ErrorDescription>
        We are sorry, but something went wrong.{" "}
      </ErrorDescription>
    </ErrorContainer>
  );
};

export default ErrorMessage;

const ErrorContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const ErrorDescription = styled.p`
  font-size: 3.2rem;

  @media ${deviceSize.mobile} {
    font-size: 2.4rem;
  } ;
`;
