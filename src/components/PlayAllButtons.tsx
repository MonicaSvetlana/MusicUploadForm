import { FC, useContext, useEffect, useState } from "react";
import { Button } from "../styled_components/Button";
import { StyledIcon } from "../styled_components/Icon";
import {
  faPause,
  faPlay,
  faCaretDown,
  faPlus,
  faUpRightAndDownLeftFromCenter,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { SongContext } from "../SongContext";

export const PlayAllButtons = () => {
  const {
    songList,
    setSongList,
    currentSong,
    currentSongIndex,
    setCurrentSongIndex,
    handleTogglePlay,
    inputValue,
    setInputValue,
  } = useContext(SongContext);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [sorted, setSorted] = useState<boolean>(true);

  const handlePlayAll = () => {
    if (isPlaying) {
      currentSong?.pause();
      setCurrentSongIndex(-1);
    } else {
      handleTogglePlay(0);
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        console.log(currentSong?.currentTime, currentSong?.duration);
        if (
          currentSong &&
          Number(currentSong?.currentTime) >= Number(currentSong?.duration)
        ) {
          if (currentSongIndex < songList.length - 1) {
            handleTogglePlay(currentSongIndex + 1);
          } else {
            handlePlayAll();
          }
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  });
  const sortSongs = () => {
    setSongList([
      ...songList.sort((a, b) =>
        sorted ? a.trackNumber - b.trackNumber : b.trackNumber - a.trackNumber
      ),
    ]);
    setSorted(!sorted);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: "10px 0",
        background: "#d3d3d3b5",
        width: "90%",
        color: "#5a5959",
        textAlign: "start",
        fontWeight: "bold",
        fontSize: "13px",
        fontFamily: "Arial,Helvetica,sans-serif",
      }}
    >
      <Button onClick={handlePlayAll} $primary>
        <StyledIcon icon={isPlaying ? faPause : faPlay} $primary />
        Play All
        <StyledIcon icon={faCaretDown} />
      </Button>

      <Button $primary onClick={sortSongs}>
        <StyledIcon icon={faUpRightAndDownLeftFromCenter} />
        Track Nu...
        <StyledIcon icon={faCaretDown} />
      </Button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <StyledIcon
          icon={faMagnifyingGlass}
          style={{ position: "absolute", right: "5px" }}
        />
        <input
          type="search"
          style={{
            padding: "0.5em 1em",
            borderRadius: "25px",
            border: "1px solid",
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search song"
        />
      </div>
    </div>
  );
};
