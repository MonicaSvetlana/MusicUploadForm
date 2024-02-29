import { useState } from "react";
import { SongList } from "./components/SongList";
import { ISong } from "./types";
import { MusicUploadForm } from "./components/MusicUploadForm";
import { SongContext } from "./SongContext";
import { PlayAllButtons } from "./components/PlayAllButtons";

function App() {
  const [songList, setSongList] = useState<ISong[]>([
    {
      songName: "Halo",
      artistName: "Blackbird Blackbird",
      trackNumber: 1,
      file: "/music/music1.mp3",
    },
    {
      songName: "Blind",
      artistName: "Blackbird Blackbird",
      trackNumber: 2,
      file: "/music/music2.mp3",
    },
    {
      songName: "Twin Flames",
      artistName: "Blackbird Blackbird",
      trackNumber: 3,
      file: "/music/music3.mp3",
    },
    {
      songName: "Left to Hurt",
      artistName: "Blackbird Blackbird",
      trackNumber: 4,
      file: "/music/music4.mp3",
    },
    {
      songName: "Starlight",
      artistName: "Blackbird Blackbird",
      trackNumber: 5,
      file: "/music/music5.mp3",
    },
    {
      songName: "Modern Disbelief",
      artistName: "Blackbird Blackbird",
      trackNumber: 6,
      file: "/music/music6.mp3",
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const [currentSong, setCurrentSong] = useState<HTMLAudioElement | null>(null);

  const pushItem = (newSong: ISong) => {
    setSongList((prevSongLists: ISong[]) => [...prevSongLists, newSong]);
  };
  const handleTogglePlay = (index: number) => {
    const audioUrl = songList[index]?.file;
    currentSong?.pause();
    if (index == currentSongIndex) {
      setCurrentSongIndex(-1);
    } else if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
      setCurrentSong(audio);
      setCurrentSongIndex(index);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <SongContext.Provider
        value={{
          songList,
          setSongList,
          pushItem,
          currentSongIndex,
          setCurrentSongIndex,
          currentSong,
          handleTogglePlay,
          inputValue,
          setInputValue,
        }}
      >
        <PlayAllButtons />
        <SongList inputValue={inputValue} />
        <MusicUploadForm />
      </SongContext.Provider>
    </div>
  );
}

export default App;
