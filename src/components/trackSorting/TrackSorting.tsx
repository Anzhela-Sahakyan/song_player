import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import styles from "./trackSorting.module.css";

export default function TrackSorting() {
  return (
    <div className={styles.sort}>
      <SwapVertIcon />
      Track Number
      <ArrowDropDownIcon />
    </div>
  );
}
