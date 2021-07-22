import './App.css';
import Entete from './Components/Entete';
import Outils from './Components/Outils';
import Formation from './Components/Formation';
import Divers from './Components/Divers';
import Experiences from './Components/Experiences';
import Realisations from './Components/Realisations';
import Langues from './Components/Langues';
import Profil from './Components/Profil';
import React, { useState } from 'react';

function App() {
  
  const [profil,setProfil]=useState("");
  const [addFormation,setAddFormation]=useState([{index:0, titre:"1", contenu:""}]);
  const [addExperience,setAddExperience]=useState([{index:0, titre:"1", contenu:""}]);

  
  return (
    <div className="App" >
      <Outils addFormation={addFormation} setAddFormation={setAddFormation} profil={profil} setProfil={setProfil} addExperience={addExperience} setAddExperience={setAddExperience}/>
      <div className="monCV">
        <Entete />
        <div className="corpsCV">
          <div className="lePrioritaire">
            <Profil profil={profil} setProfil={setProfil}/>
            <Formation addFormation={addFormation} setAddFormation={setAddFormation}/>
            <Experiences addExperience={addExperience} setAddExperience={setAddExperience}/>
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