import MusicControlsTabs from "./MusicControlsTabs";
import MusicPlayTab from "./MusicPlayerTab";
import SongPlayingInfo from "./SongPlayingInfo";

const Player = () => {
  return (
    <div className="row items-center space-between border-t px-m player">
      <MusicPlayTab />
      <SongPlayingInfo />
      <MusicControlsTabs />
    </div>
  );
};

export default Player;
