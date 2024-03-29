import styled from "styled-components/macro";
import deviceSize from "../Utils/deviceSize";

interface Props {
  className?: string;
}

const ErrorMessage: React.FC<Props> = ({ className }) => {
  return (
    <ErrorContainer className={className}>
      <ErrorDescription>We are sorry, something went wrong. </ErrorDescription>
    </ErrorContainer>
  );
};

export default ErrorMessage;

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 150px auto 0 auto;
`;

const ErrorDescription = styled.p`
  color: #fff;
  font-size: 3.2rem;

  @media ${deviceSize.mobile} {
    font-size: 2.4rem;
  } ;
`;
