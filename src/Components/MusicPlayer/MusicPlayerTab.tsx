import IconButton from "../IconButton";
import { IoMdShuffle, IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import { ImLoop } from "react-icons/im";
import React, { useState } from "react";

interface MusicPlayTabProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  togglePlayer: () => void;
}

const MusicPlayTab = ({
  audioRef,
  isPlaying = false,
  togglePlayer,
}: MusicPlayTabProps) => {
  const ControlIcon = isPlaying ? FaCirclePause : FaCirclePlay;

  const shuffle = () => {
    console.log("shuffle");
  };

  const backward = () => {
    console.log("backward");
  };

  const forward = () => {
    console.log("forward");
  };

  const loop = () => {
    console.log("loop");
  };

  return (
    <div className="row items-center space-between px-lg">
      <IconButton onClick={shuffle} children={<IoMdShuffle size={20} />} />
      <IconButton
        onClick={backward}
        children={<IoMdSkipBackward size={20} />}
      />
      <IconButton onClick={togglePlayer} children={<ControlIcon size={20} />} />
      <IconButton onClick={forward} children={<IoMdSkipForward size={20} />} />
      <IconButton onClick={loop} children={<ImLoop size={20} />} />
    </div>
  );
};

export default MusicPlayTab;
