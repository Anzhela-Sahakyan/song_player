import ISongRow from "../../types/types";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoneIcon from "@mui/icons-material/Done";
import { IoMdShareAlt } from "react-icons/io";

export default function SongRow({
  songName,
  artistName,
  trackNumber,
}: ISongRow) {
  return (
    <div>
      <DragIndicatorIcon />
      <PlayArrowIcon />
      {songName} {artistName} {trackNumber}
      <FavoriteIcon />
      <DoneIcon />
      <IoMdShareAlt />
    </div>
  );
}
