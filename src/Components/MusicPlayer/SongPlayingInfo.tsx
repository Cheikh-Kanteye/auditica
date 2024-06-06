import { useCallback, useEffect, useRef, useState } from "react";
import { tracks } from "../../data/tracks";
import ProgressBar from "./ProgressBar";

interface CoverProps {
  imgSrc: string | undefined;
}

const Cover = ({ imgSrc }: CoverProps) => {
  return (
    <button className="played-music-cover">
      <img className="img-cover" src={imgSrc} alt="" />
    </button>
  );
};

interface SongPlayerInforProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
}

const SongPlayingInfo = ({ audioRef, isPlaying }: SongPlayerInforProps) => {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const playAnimationRef = useRef<number>(0);

  const onLoadMetadata = () => {
    if (audioRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  const repeat = useCallback(() => {
    if (audioRef.current && progressBarRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(parseInt(progressBarRef.current.value) / duration) * 100}%`
      );

      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        playAnimationRef.current = requestAnimationFrame(repeat);
      } else {
        audioRef.current.pause();
        cancelAnimationFrame(playAnimationRef.current);
      }
    }
  }, [isPlaying, audioRef, repeat]);

  return (
    <div
      className="border-r row px-m items-center flex-1"
      style={{ height: "100%" }}
    >
      <Cover imgSrc={tracks[0].thumbnail} />
      <audio
        className="hidden absolute -z-index"
        ref={audioRef}
        src={tracks[0].src}
        onLoadedMetadata={onLoadMetadata}
        controls
      />
      <div className="justify-center items-center flex-1 col px-m">
        <div className="justify-center items-center row">
          <h2 className="section-title font-semibold">{tracks[0].title}</h2>
          <span className="section-title text-light">•</span>
          <h2 className="section-title text-light font-regular">
            {tracks[0].author}
          </h2>
        </div>
        <ProgressBar
          {...{ audioRef, progressBarRef, timeProgress, duration }}
        />
      </div>
    </div>
  );
};
export default SongPlayingInfo;
