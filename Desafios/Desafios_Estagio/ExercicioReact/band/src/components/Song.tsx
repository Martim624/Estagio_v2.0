import React from "react";

interface SongProps {
  song: string;
}

const Song: React.FC<SongProps> = ({ song }: SongProps) => {
  return <div className="expense-item">{song}</div>;
};

export default Song;
