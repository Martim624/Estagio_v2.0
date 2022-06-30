import React, { useState } from "react";
import Song from "./Song";

interface SongsProps {
  songs: string[];
}

const SongsList: React.FC<SongsProps> = ({ songs }: SongsProps) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}> Songs</button>
      {show &&
        songs.map((song, index) => <Song key={"song" + index} song={song} />)}
    </>
  );
};

export default SongsList;
