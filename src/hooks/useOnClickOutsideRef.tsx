import { useEffect, useRef } from "react";

export const useOnClickOutsideRef = (
  callback: () => void,
  refValue: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const handleClick: (event: MouseEvent) => void = (event) => {
      if (!refValue.current?.contains(event.target as Node)) {
        callback();
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [callback, refValue]);
};
