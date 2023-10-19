import React from "react";
import { Song } from "../types";

export default function Setlist(props: { currentSetlist: Song[] | null }) {
  const renderedSetlist =
    props.currentSetlist &&
    props.currentSetlist.map((song, index) => {
      return (
        <div className="song-row" key={index + 1}>
          {index + 1}: {song.name}
        </div>
      );
    });
  return (
    props.currentSetlist && <div id="setlist-container">{renderedSetlist}</div>
  );
}
