import React, { useEffect, useState } from "react";
import Setlist from "../components/Setlist";
import { Song } from "../types";
import { getAllSongs, shuffleArray } from "../utils/songsHelper";
import logo from "../imgs/2022_Causeries_Vit_utan_bakgrund.png";

export default function SetlistPage() {
  const [currentSetlist, setCurrentSetlist] = useState<Song[]>([]);
  const [allSongs, setAllSongs] = useState<Song[] | null>();
  const [amount, setAmount] = useState<number>(14);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleRandomizeSetlist() {
    if (!allSongs) return;
    setCurrentSetlist(shuffleArray(allSongs).slice(0, amount));
  }
  function HandleAmountChange(step: number) {
    if (!allSongs || amount + step < 0) setAmount(0);
    else if (amount + step > allSongs.length) setAmount(allSongs.length);
    else setAmount(amount + step);
  }

  useEffect(() => {
    setIsLoading(true);
    getAllSongs().then((res) => {
      if (res) setAllSongs(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="setlist">
      <div className="header">
        <img src={logo} className="logo-img" alt="band-logo" />
        {currentSetlist && currentSetlist.length > 0 && (
          <h1>Today's Setlist:</h1>
        )}
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Setlist currentSetlist={currentSetlist} />
      )}
      {allSongs && (
        <div className="random-main-control">
          <button onClick={handleRandomizeSetlist} className="random-btn">
            Randomize Setlist
          </button>
          <div className="songs-amount-input">
            <button
              className="amount-btn"
              onClick={() => HandleAmountChange(1)}
            >
              +
            </button>
            <input
              type="number"
              value={amount}
              min={1}
              max={allSongs.length}
              onChange={(e) => setAmount(Number(e.target.value))}
            ></input>
            <button
              className="amount-btn"
              onClick={() => HandleAmountChange(-1)}
            >
              -
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
