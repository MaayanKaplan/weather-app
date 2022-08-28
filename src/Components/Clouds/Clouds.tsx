import { useEffect, useState } from "react";
import { number } from "yup/lib/locale";
import cloudImage from "./Images/cloud.svg";
import * as S from "./styles";
import { MAX_CLOUD_SPEED, MIN_CLOUD_SPEED } from "./types";

interface CloudsProp {
  numClouds: number;
}

interface Cloud {
  positionY: number;
  delayTime: number;
  speed: number;
}
const Clouds: React.FC<CloudsProp> = ({ numClouds }) => {
  const [clouds, setClouds] = useState<Cloud[] | undefined>(undefined);
  useEffect(() => {
    const newClouds: Cloud[] = [];
    for (let i = 0; i < numClouds; i++) {
      const cloud = {
        positionY: Math.random() * 100,
        delayTime: Math.random() * 10,
        speed: Math.random() * MAX_CLOUD_SPEED + MIN_CLOUD_SPEED,
      };
      newClouds.push(cloud);
    }
    setClouds(newClouds);
  }, [numClouds]);
  return (
    <>
      {clouds &&
        clouds.map((cloud) => {
          return (
            <S.Cloud
              src={cloudImage}
              positionY={cloud.positionY}
              delayTime={cloud.delayTime}
              speed={cloud.speed}
            ></S.Cloud>
          );
        })}
    </>
  );
};

export default Clouds;
