import React, { FC, useContext } from "react";
import { ISong } from "../types";
import {
  faHeart,
  faCheck,
  faShare,
  faCaretDown,
  faPlay,
  faPause,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import { Name } from "../styled_components/Name";
import { StyledIcon } from "../styled_components/Icon";
import { SongContext } from "../SongContext";
interface ISongProps {
  song: ISong;
  songIndex: number;
}

export const SongRow: FC<ISongProps> = React.memo(({ song, songIndex }) => {
  const { handleTogglePlay, currentSongIndex } = useContext(SongContext);

  return (
    <tr>
      <Name style={{ display: "flex", justifyContent: "space-around" }}>
        <StyledIcon icon={faGripVertical} />
        <StyledIcon
          onClick={() => handleTogglePlay(songIndex)}
          icon={songIndex == currentSongIndex ? faPause : faPlay}
          $primary
        />
      </Name>
      <Name>{song.songName}</Name>
      <Name>{song.artistName}</Name>
      <Name>{song.trackNumber}</Name>
      <Name $primary>
        <StyledIcon icon={faHeart} />
        <StyledIcon icon={faCheck} /> <StyledIcon icon={faShare} />{" "}
        <StyledIcon icon={faCaretDown} />
      </Name>
    </tr>
  );
});
