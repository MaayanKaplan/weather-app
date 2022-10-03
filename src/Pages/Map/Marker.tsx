import styled from "styled-components/macro";

interface MarkerProps {
  tempMax: string | number;
  tempMin: string | number;
  lng: number | undefined;
  lat: number | undefined;
  icon: number;
}

const Marker = ({ tempMax, tempMin, lng, lat, icon }: MarkerProps) => {
  return (
    <MarkerWrapper>
      <IconWrapper></IconWrapper>
      <Temperature></Temperature>
    </MarkerWrapper>
  );
};

export default Marker;

const MarkerWrapper = styled.div`
  width: 250px;
  height: 100px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
    inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1), 0 2px 60px 0 rgba(0, 0, 0, 0.3);

  display: flex;
  gap: 50px;
`;

const IconWrapper = styled.div``;

const Temperature = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  color: #444e72;
`;
