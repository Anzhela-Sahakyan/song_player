import AddAllButton from "../addAllButton/AddAllButton";
import PlayAllButton from "../playAllButton/PlayAllButton";
import SearchField from "../searchField/SearchField";
import TrackSorting from "../trackSorting/TrackSorting";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_btns}>
        <PlayAllButton />
        <AddAllButton />
      </div>
      <div className={styles.header_sort_search}>
        <TrackSorting />
        <SearchField />
      </div>
    </div>
  );
}
