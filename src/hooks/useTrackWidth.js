import { useEffect, useState } from "react";

const useTrackWidth = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const getWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    getWindowSize();

    window.addEventListener("resize", getWindowSize);

    return () => window.removeEventListener("resize", getWindowSize);
  }, []);

  return windowSize;
};

export default useTrackWidth;
