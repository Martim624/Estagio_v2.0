import React from "react";
import { album } from "../App";
import SongsList from "./SongsList";
import "./AlbumItem.css";

const Album: React.FC<album> = ({ name, songs }: album) => {
  return (
    <>
      <div className="expense-item__description">{name}</div>
      <SongsList songs={songs} />
    </>
  );
};

export default Album;
