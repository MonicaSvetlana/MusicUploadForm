import React, { FC, useContext, useMemo } from "react";
import { SongRow } from "./SongRow";
import { Title } from "../styled_components/Title";
import { SongContext } from "../SongContext";

export const SongList: FC<{ inputValue: string }> = React.memo(
  () => {
    const { songList, inputValue } = useContext(SongContext);

    const searchedSongs = useMemo(
      () =>
        inputValue != ""
          ? songList.filter((elm) =>
              elm.songName.toLowerCase().startsWith(inputValue.toLowerCase())
            )
          : songList,
      [songList, inputValue]
    );

    return (
      <>
        <table style={{ width: "90%" }}>
          <thead>
            <tr>
              <Title></Title>
              <Title>Song Name</Title>
              <Title>Artist Name</Title>
              <Title>Track</Title>
              <Title></Title>
            </tr>
          </thead>
          <tbody>
            {searchedSongs.map((song, index) => (
              <SongRow key={index} songIndex={index} song={song} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
);
