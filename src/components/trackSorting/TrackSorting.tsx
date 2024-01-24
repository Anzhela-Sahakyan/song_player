import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import styles from "./trackSorting.module.css";
import { ESortOption } from "../../types/filterTypes";

interface TrackSortingProps {
  sort: ESortOption;
  setSort: (sort: ESortOption) => void;
}

export default function TrackSorting({ setSort, sort }: TrackSortingProps) {
  return (
    <div
      onClick={() =>
        setSort(
          sort === ESortOption.TrackNumberAsc
            ? ESortOption.TrackNumberDes
            : ESortOption.TrackNumberAsc
        )
      }
      className={styles.sort}
    >
      <SwapVertIcon />
      Track Number
      {sort === ESortOption.TrackNumberAsc ? (
        <ArrowDropUpIcon />
      ) : (
        <ArrowDropDownIcon />
      )}
    </div>
  );
}
//FORMAN
