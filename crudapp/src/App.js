import React from 'react'
import CrudApi from './Components/Crudapi';
import CrudApp from "./Components/CrudApp";
import SongSearch from './Components/SongSearch';






function App() {
  return (

    <>
     <h1> Ejercicios React </h1>
     <SongSearch/>
     <hr/>
     <CrudApi/>
     <hr/>
     <CrudApp/>
     <hr/>
    </>

  );
}

export default App;
