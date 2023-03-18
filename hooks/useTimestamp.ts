import { RefObject, useEffect, useState } from "react";
interface UseTimestampProps {
  src: string;
  videoRef: RefObject<HTMLVideoElement> | null;
}

export const useTimestamp = ({ src, videoRef }: UseTimestampProps) => {
  const [timeStamp, setTimeStamp] = useState(0);
  useEffect(() => {
    const currentTimeStamp = JSON.parse(localStorage.getItem(src) || "{}");
    if (currentTimeStamp) {
      setTimeStamp(currentTimeStamp);
    }
  }, [src]);

  const handlePauseVideo = (e: any) => {
    localStorage.setItem(src, JSON.stringify(e.target.currentTime));
    setTimeStamp(e.target.currentTime);
  };

  const handlePlayVideo = () => {
    if (!videoRef) {
      return;
    }
    if (videoRef.current) {
      if (timeStamp < videoRef?.current.duration) {
        videoRef.current.currentTime = timeStamp;
      } else {
        videoRef.current.currentTime = 0;
      }
    }
  };

  return {
    timeStamp,
    handlePauseVideo,
    handlePlayVideo,
  };
};
