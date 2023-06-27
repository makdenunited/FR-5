const FAVORITE_ARTISTS_MESSAGE = "List of favorite artists \n";
const TOTAL_ARTISTS_MESSAGE = "\nTotal:";
let artistsTotal = 0;

let musicLibrary = {
  favoriteArtist: {
    atrist1: "Five Finger Death Punch",
    atrist2: "Wolfmother",
    atrist3: "Falling In Reverse",
    atrist4: "Kansas",
    atrist5: "Johnny Cash",
    atrist6: "Rival Sons",
  },

  log() {
    for (let i = 0; i < Object.keys(musicLibrary.favoriteArtist).length; i++) {
      artistsTotal++;
      console.log(Object.values(musicLibrary.favoriteArtist)[i]);
    }
  },
};

console.log(FAVORITE_ARTISTS_MESSAGE);
musicLibrary.log();
console.log(TOTAL_ARTISTS_MESSAGE, artistsTotal);
