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
  // Todo fully explain the meaning of each piece of state
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState(ESortOption.TrackNumberAsc);
  const [songList, setSongList] = useState(songs);
  const [sortMode, setSortMode] = useState(SortMode.AutoSort);

  // Todo explain the logic of sortin and filtering
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
