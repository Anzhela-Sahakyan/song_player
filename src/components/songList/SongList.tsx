import ISong from "../../types/types";
import { combineClasses } from "../../utils/styleUtils";
import SongRow from "../songRow/SongRow";

import styles from "./songList.module.css";

export default function SongList({ songList }: { songList: ISong[] }) {
  const songRows = songList.map((song) => (
    <SongRow song={song} key={song.trackNumber} />
  ));

  return (
    <div>
      <div className={combineClasses(styles.songlist_title)}>
        <div
          className={combineClasses(styles.first_empty, styles.title_items)}
        />
        <div className={combineClasses(styles.song_name, styles.title_items)}>
          Song Name
        </div>
        <div className={combineClasses(styles.artist_name, styles.title_items)}>
          Artist Name
        </div>
        <div
          className={combineClasses(styles.track_number, styles.title_items)}
        >
          Track
        </div>
        <div
          className={combineClasses(styles.last_empty, styles.title_items)}
        />
      </div>
      <div>{songRows}</div>
    </div>
  );
}
