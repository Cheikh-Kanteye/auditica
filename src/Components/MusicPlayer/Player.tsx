import { useRef, useState } from "react";
import MusicControlsTabs from "./MusicControlsTabs";
import MusicPlayTab from "./MusicPlayerTab";
import SongPlayingInfo from "./SongPlayingInfo";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setisPlaying] = useState(false);

  const togglePlayer = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setisPlaying(false);
    } else {
      audioRef.current?.play();
      setisPlaying(true);
    }
  };

  return (
    <div className="row items-center justify-between border-t px-m player">
      <MusicPlayTab {...{ audioRef, isPlaying, togglePlayer }} />
      <SongPlayingInfo {...{ isPlaying, audioRef }} />
      <MusicControlsTabs />
    </div>
  );
};

export default Player;
