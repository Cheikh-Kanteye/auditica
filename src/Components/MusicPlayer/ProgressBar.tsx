import { formatTime } from "../../utils";

interface ProgressBarProps {
  progressBarRef: React.RefObject<HTMLInputElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
  timeProgress: number;
  duration: number;
}

const ProgressBar = ({
  audioRef,
  progressBarRef,
  timeProgress,
  duration,
}: ProgressBarProps) => {
  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = parseInt(progressBarRef.current?.value);
    }
  };

  return (
    <div className="progress row items-center">
      <span className="time current">{formatTime(timeProgress)}</span>
      <input
        ref={progressBarRef}
        type="range"
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="time">{formatTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
