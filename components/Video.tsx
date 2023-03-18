import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { usePlaybackSpeed } from "../hooks/usePlaybackSpeed";
import { useTimestamp } from "../hooks/useTimestamp";
import { Box, Button } from "@mui/material";

interface VideoProps {
  src: string;
  playMutedOnHover?: boolean;
  poster?: string;
  width?: string | number;
  height?: string | number;
}

export const Video = ({
  src,
  width,
  height,
  playMutedOnHover,
  poster,
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playOnHover = (e: any) => e.target.play();

  const pauseOnHover = (e: any) => e.target.pause();

  usePlaybackSpeed({ videoRef });

  const { timeStamp, handlePlayVideo, handlePauseVideo } = useTimestamp({
    src,
    videoRef,
  });

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current.currentTime = timeStamp;

    const hlsConfig = {
      startPosition: timeStamp,
    };
    const hls = new Hls(hlsConfig);
    const video = videoRef.current;

    hls.loadSource(src);
    hls.attachMedia(video);
  }, [src]);

  const togglePictureInPicture = () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled) {
      if (videoRef.current) {
        videoRef.current.requestPictureInPicture();
      }
    }
  };

  return (
    <Box display="grid" gridTemplateColumns="1fr" gap="15px">
      <video
        width={width || "100%"}
        height={height || "auto"}
        src={src}
        controls
        muted={playMutedOnHover}
        onMouseOver={playMutedOnHover ? playOnHover : undefined}
        onMouseOut={playMutedOnHover ? pauseOnHover : undefined}
        onPause={handlePauseVideo}
        onPlay={handlePlayVideo}
        ref={videoRef}
        poster={poster}
      ></video>
      <Button onClick={togglePictureInPicture}>Picture-in-picture mode</Button>
    </Box>
  );
};
