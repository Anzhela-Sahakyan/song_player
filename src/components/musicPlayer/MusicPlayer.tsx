import Header from "../header/Header";
import SongList from "../songList/SongList";
import { songs } from "../../data";

export default function MusicPlayer() {
  return (
    <div>
      <Header />
      <SongList songList={songs} />
    </div>
  );
}
