import ISong from "../../types/types";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoneIcon from "@mui/icons-material/Done";
import { IoMdShareAlt } from "react-icons/io";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import styles from "./songRow.module.css";
import { combineClasses } from "../../utils/styleUtils";

export default function SongRow({ song }: { song: ISong }) {
  const { songName, artistName, trackNumber } = song;
  return (
    <div>
      <div className={combineClasses(styles.song_row)}>
        <div
          className={combineClasses(
            styles.drag_play_icons,
            styles.song_row_items
          )}
        >
          <DragIndicatorIcon />
          <PlayArrowIcon />
        </div>
        <div
          className={combineClasses(styles.song_name, styles.song_row_items)}
        >
          {songName}
        </div>
        <div
          className={combineClasses(styles.artist_name, styles.song_row_items)}
        >
          {artistName}
        </div>
        <div
          className={combineClasses(styles.track_number, styles.song_row_items)}
        >
          {trackNumber}
        </div>
        <div
          className={combineClasses(
            styles.right_side_icons,
            styles.song_row_items
          )}
        >
          <FavoriteIcon />
          <DoneIcon />
          <IoMdShareAlt />
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
}
