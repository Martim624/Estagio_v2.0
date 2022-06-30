import React from "react";
import "./App.css";
import Album from "./components/Album";
import "./components/Album.css";
import "./components/AlbumItem.css";

interface band {
  name: string;
  albuns: album[];
}

export interface album {
  id: string;
  name: string;
  songs: string[];
}

const bandObj: band = {
  name: "Twenty One Pilots",
  albuns: [
    {
      id: "a1",
      name: "Twenty One Pilots (Album)",
      songs: [
        "	Implicit Demand for Proof",
        "	Fall Away",
        "The Pantaloon",
        "	Addict with a Pen",
        "Friend, Please",
        "March to the Sea",
        "Friend, Please",
        "March to the Sea",
        "Johnny Boy",
        "Oh, Ms. Believer",
        "Air Catcher",
        "Trapdoor",
        "A Car, a Torch, a Death",
        "Taxi Cab",
        "Before You Start Your Day",
        "Isle of Flightless Birds",
      ],
    },
    {
      id: "a2",
      name: "Regional at Best",
      songs: [
        " Guns for Hands",
        "Holding on to You",
        "Ode to Sleep",
        "Slowtown",
        "Car Radio",
        "Forest",
        "Glowing Eyes",
        "Kitchen Sink",
        "Anathema",
        "Lovely",
        "Ruby",
        "Trees",
        "Be Concerned",
        "Clear",
      ],
    },
  ],
};

function App() {
  return (
    <div
      style={{
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/27/429/257/band-music-twenty-one-pilots-wallpaper-preview.jpg")`,
      }}
    >
      <div className="expenses">
        <div className="expenses-item">
          <div className="App"> {bandObj.name}</div>
          {bandObj.albuns.map((album) => (
            <Album
              key={album.id}
              id={album.id}
              name={album.name}
              songs={album.songs}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
