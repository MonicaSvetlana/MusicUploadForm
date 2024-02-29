import { createContext } from "react";
import { ISong } from "./types";

interface SongContextType {
  songList: ISong[];
  setSongList: Function;
  inputValue: string;
  setInputValue: Function;
  currentSong: any;
  currentSongIndex: number;
  setCurrentSongIndex: Function;
  handleTogglePlay: Function;
  pushItem: (newSong: ISong) => void;
}


export const SongContext = createContext<SongContextType>(
  {} as SongContextType
);


