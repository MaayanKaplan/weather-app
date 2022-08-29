import { useState, useEffect } from "react";

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 900);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  console.log(isMobile);
  return [isMobile];
};
