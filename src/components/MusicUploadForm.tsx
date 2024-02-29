import React, { FC, useContext } from "react";
import { ISong } from "../types";
import { useForm } from "react-hook-form";
import { Button } from "../styled_components/Button";
import {
  StyledAlert,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../styled_components/StyledForm";
import { SongContext } from "../SongContext";

interface SongForm {
  songName: string;
  artistName: string;
  trackNumber: number;
  file: FileList;
}

export const MusicUploadForm: FC = React.memo(() => {
  const {  pushItem } = useContext(SongContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<SongForm>();
  const save = (data: SongForm) => {
    let song: File = data.file[0] as File;
    let reader = new FileReader();
    reader.readAsDataURL(song);
    reader.onload = () => {
      let songData: ISong = {
        ...data,
        file: reader.result as string,
      };
      pushItem(songData);
      reset();
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
 
  return (
    <>
      <StyledForm onSubmit={handleSubmit(save)}>
        <StyledLabel htmlFor="trackNumber">Track Number:</StyledLabel>
        <StyledInput
          type="text"
          id="trackNumber"
          placeholder="Enter the track number"
          {...register("trackNumber", {
            required: "Fill fields",
            pattern: {
              value: /\d+/,
              message: "Please enter a numberic value.",
            },
          })}
        />
        {errors.trackNumber && (
          <StyledAlert> {errors.trackNumber.message}</StyledAlert>
        )}
        <StyledLabel htmlFor="songName">Song Name:</StyledLabel>
        <StyledInput
          type="text"
          id="songName"
          placeholder="Enter the song name"
          {...register("songName", { required: "Fill fields" })}
        />
        {errors.songName && (
          <StyledAlert> {errors.songName.message}</StyledAlert>
        )}
        <StyledLabel htmlFor="artistName">Artist Name:</StyledLabel>
        <StyledInput
          type="text"
          id="artistName"
          placeholder="Enter the artist name"
          {...register("artistName", { required: "Fill fields" })}
        />
        {errors.artistName && (
          <StyledAlert> {errors.artistName.message}</StyledAlert>
        )}
        <StyledLabel htmlFor="file">Upload file:</StyledLabel>
        <StyledInput
          type="file"
          id="file"
          placeholder="Upload a file"
          accept="audio/mp3, audio/wav"
          {...register("file", {
            required: "Fill fields",
            validate(val) {
              console.log(val);
              const format = ["audio/mpeg", "audio/wav"];
              if (!format.includes(val[0].type)) {
                return "Only mp3 or wav";
              }
              return true;
            },
          })}
        />
        {errors.file && <StyledAlert> {errors.file.message}</StyledAlert>}
        <Button $primary>Add Song</Button>
      </StyledForm>
    </>
  );
});
