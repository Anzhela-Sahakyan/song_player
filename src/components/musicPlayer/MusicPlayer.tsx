import Header from "../header/Header";
import SongList from "../songList/SongList";
import { songs } from "../../data";
import { useMemo, useState } from "react";
import { ESortOption } from "../../types/filterTypes";
import filterSongList from "../../utils/sortUtils";
import AddSongBtn from "../musicUpload/addSongBtn/AddSongBtn";
import ISong from "../../types/songTypes";

enum SortMode {
  ManualDragSort,
  AutoSort,
}

export default function MusicPlayer() {
  // State for searching, it is initialized as an empty string.
  const [searchQuery, setSearchQuery] = useState("");

  // State for sorting, it is initialized with ascending order.
  const [sort, setSort] = useState(ESortOption.TrackNumberAsc);

  // State for displaying and updating the list of songs. It is initialized with the imported songs data
  const [songList, setSongList] = useState(songs);

  // State for tracking the current sorting mode. It is initialized as AutoSort, menaing being sorted with the button and not drag-and-drop.
  const [sortMode, setSortMode] = useState(SortMode.AutoSort);

  // useMemo hook is used to optimize the performance and avoid unnecessary re-renderings.
  // Inside useMemo an imported filterSongList function is called which is used to filter the song list based on
  // the search query and sort the list based on the selected sort option. The default sorting is in ascending order.
  // Filtering with searchQuery is done by song name or artist name.
  // A dependencies array is provided at the end of useMemo  hook, so that the it re-renders the component when any item
  // dependencies array is changed.
  const filteredSongList = useMemo(
    () =>
      filterSongList({
        filters: { searchQuery, sort },
        songList,
      }),
    [searchQuery, sort, songList]
  );

  const handleSort = (sort: ESortOption) => {
    setSortMode(SortMode.AutoSort);
    setSort(sort);
  };

  const handleSearchQueryChange = (searchQuery: string) => {
    setSortMode(SortMode.AutoSort);
    setSearchQuery(searchQuery);
  };

  const handleSongListManualChange = (songList: ISong[]) => {
    setSortMode(SortMode.ManualDragSort);
    setSongList(songList);
  };

  return (
    <div>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={handleSearchQueryChange}
        setSort={handleSort}
        sort={sort}
      />
      <SongList
        setSongList={handleSongListManualChange}
        songList={
          sortMode === SortMode.ManualDragSort ? songList : filteredSongList
        }
      />
      <AddSongBtn />
    </div>
  );
}
