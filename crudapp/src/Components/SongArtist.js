import React from 'react'

const SongArtist = ({bio, country, birth, genre, web,biografy, img, artist}) => {
  return (
     <>
     <section>
           <h2>Información Artista</h2>
           <img src={img} alt={artist}/>
           <h3> {bio} </h3>
           <p>Año de nacimiento: {birth}</p>
           <p>País: {country}</p>
           <p>Genero Musical: {genre} </p>
           <a href={`https://${web}`} target="_blank" rel='noreferrer'>{web}</a>
           <p>{biografy}</p>
           
     </section>   
     </>
  )
}

export default SongArtist