import Header from "../header/Header";
import SongList from "../songList/SongList";
import { songs } from "../../data";
import { useMemo, useState } from "react";
import { ESortOption } from "../../types/filterTypes";
import filterSongList from "../../utils/sortUtils";
import AddSongBtn from "../musicUpload/addSongBtn/AddSongBtn";

export default function MusicPlayer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sort, setSort] = useState(ESortOption.TrackNumberAsc);
  const [songList, setSongList] = useState(songs);

  const filteredSongList = useMemo(
    () =>
      filterSongList({
        filters: { searchQuery, sort },
        songList,
      }),
    [searchQuery, sort, songList]
  );

  return (
    <div>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSort={setSort}
        sort={sort}
      />
      <SongList songList={filteredSongList} />
      <AddSongBtn />
    </div>
  );
}
