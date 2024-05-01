import { RiChat1Line } from "react-icons/ri";
import { BiListPlus } from "react-icons/bi";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import { GoKebabHorizontal } from "react-icons/go";
import { BsVolumeUp } from "react-icons/bs";
import IconButton from "../IconButton";
import { useState } from "react";

const MusicControlsTabs = () => {
  const [liked, setliked] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const HeartIcon = liked ? IoHeartSharp : IoHeartOutline;

  const comment = () => {
    console.log("comment");
  };

  const edit = () => {
    console.log("edit");
  };

  const showMore = () => {
    console.log("showMore");
  };

  const toggleLike = () => {
    setliked((prev) => !prev);
  };

  const toggleVolume = () => {
    setShowVolume((prev) => !prev);
  };

  return (
    <div className="row px-lg">
      <IconButton children={<RiChat1Line size={20} />} onClick={comment} />
      <IconButton children={<BiListPlus size={20} />} onClick={edit} />
      <IconButton children={<HeartIcon size={20} />} onClick={toggleLike} />
      <IconButton
        children={<GoKebabHorizontal size={20} />}
        onClick={showMore}
      />
      <IconButton children={<BsVolumeUp size={20} />} onClick={toggleVolume} />
    </div>
  );
};

export default MusicControlsTabs;
