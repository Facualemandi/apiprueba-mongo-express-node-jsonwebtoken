import React from "react";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";
import Message from "../Components/Message";
import "../Styles/message.css";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: No existe la canción ${search.song} para el artista ${search.artist}`}
        />
      ) : (
        <SongLyrics title={search.song} lyrics={lyric.lyrics} />
      )}

      
      {bio.artists ? (
        <SongArtist
          bio={search.artist}
          country={bio.artists[0].strCountry}
          birth={bio.artists[0].intBornYear}
          genre={bio.artists[0].strGenre}
          web={bio.artists[0].strWebsite}
          biografy={bio.artists[0].strBiographyEN}
          img={bio.artists[0].strArtistThumb}
          artist={bio.artists[0].strArtist}
          
        />
      ) : (
        <Message msg={`Error: No existe el/la artista ${search.artist}`} />
      )}
    </>
  );
};

export default SongDetails;
