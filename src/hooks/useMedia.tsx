import { useState, useEffect } from "react";

export const useMedia = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 900);

  const updateMedia: () => void = () => {
    setIsMobile(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return isMobile;
};
