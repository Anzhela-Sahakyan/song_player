import ISong from "../../types/songTypes";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoneIcon from "@mui/icons-material/Done";
import { IoMdShareAlt } from "react-icons/io";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { combineClasses } from "../../utils/styleUtils";
import DisplayMessage from "../displayMessage/DisplayMessage";
import { useEffect, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./songRow.module.css";

export default function SongRow({ song }: { song: ISong }) {
  const { songName, artistName, trackNumber } = song;

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleIconClick = (message: string) => {
    setShowMessage(true);
    setMessage(message);
  };
  useEffect(() => {
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
        setMessage("");
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [showMessage]);

  return (
    <div>
      <div className={combineClasses(styles.song_row)}>
        <div
          className={combineClasses(
            styles.drag_play_icons,
            styles.song_row_items
          )}
        >
          <DragIndicatorIcon
            className={styles.icon}
            onClick={() => handleIconClick("Drag Icon clicked")}
          />
          <PlayArrowIcon
            className={styles.icon}
            onClick={() => handleIconClick(" Play Icon clicked")}
          />
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
          <FavoriteIcon
            className={styles.icon}
            onClick={() => handleIconClick("Added to favourits")}
          />
          <DoneIcon
            className={styles.icon}
            onClick={() => handleIconClick(" The song is selected")}
          />
          <IoMdShareAlt
            className={styles.icon}
            onClick={() => handleIconClick(" The song is shared")}
          />
          <ArrowDropDownIcon
            className={styles.icon}
            onClick={() => handleIconClick("Details are shown")}
          />
        </div>
      </div>
      <div className={styles.message}>
        {showMessage && <DisplayMessage message={message} />}
      </div>
    </div>
  );
}
