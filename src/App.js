import './App.css';
import Entete from './Components/Entete';
import Outils from './Components/Outils';
import Formation from './Components/Formation';
import Divers from './Components/Divers';
import Experiences from './Components/Experiences';
import Realisations from './Components/Realisations';
import Langues from './Components/Langues';
import React, { useState } from 'react';

function App() {
  
  const [addFormation,setAddFormation]=useState([{titre:"", contenu:""}]);

  
  return (
    <div className="App" >
      <Outils addFormation={addFormation} setAddFormation={setAddFormation} />
      <div className="monCV">
        <Entete />
        <div className="corpsCV">
          <div className="lePrioritaire">
            <Formation addFormation={addFormation} setAddFormation={setAddFormation}/>
            <Experiences />
            <Realisations />
            <Langues />

          </div>
          <div className="leSecondaire">
            <Divers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;