import { Song } from "../types";

export async function getAllSongs(): Promise<Song[] | null> {
  try {
    const response = await fetch("./songsFakeDb.json", {
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
    });
    if (!response.ok) {
      console.log("Unable to fetch all songs...");

      return null;
    }
    const data = await response.json();

    return data.songs;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function shuffleArray(array: any[]) {
  let shuffledArray = [...array];
  for (var i = shuffledArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }
  return shuffledArray;
}
