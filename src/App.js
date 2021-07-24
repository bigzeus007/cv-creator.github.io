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
import CentresInteret from './Components/CentresInteret';
import Qualites from './Components/Qualites';

function App() {
  
  const [profil,setProfil]=useState("");
  const [addFormation,setAddFormation]=useState([{index:0, titre:"1", contenu:""}]);
  const [addExperience,setAddExperience]=useState([{index:0, titre:"1", contenu:""}]);
  const [realisation,setRealisation]=useState("");
  const [addLanguage,setAddLanguage]=useState([{visible:"invisible"}]);
  const [addQualites,setAddQualites]=useState([{visible:"invisible"}]);
  const [addCentresInteret,setAddCentresInteret]=useState([{visible:"invisible"}]);
  

  
  return (
    <div className="App" >
      <Outils addFormation={addFormation} setAddFormation={setAddFormation} profil={profil} setProfil={setProfil} 
      addExperience={addExperience} setAddExperience={setAddExperience} realisation={realisation} setRealisation={setRealisation} 
      addLanguage={addLanguage} setAddLanguage={setAddLanguage} addQualites={addQualites} setAddQualites={setAddQualites} addCentresInteret={addCentresInteret}
      setAddCentresInteret={setAddCentresInteret}
      />
      <div className="monCV">
        <Entete />
        <div className="corpsCV">
          <div className="lePrioritaire">
            <Profil profil={profil} setProfil={setProfil}/>
            <Formation addFormation={addFormation} setAddFormation={setAddFormation}/>
            <Experiences addExperience={addExperience} setAddExperience={setAddExperience}/>
            <Realisations realisation={realisation} setRealisation={setRealisation} />
            

          </div>
          <div className="leSecondaire">
            <Divers  />
            <Langues addLanguage={addLanguage} setAddLanguage={setAddLanguage}/>
            <Qualites addQualites={addQualites} setAddQualites={setAddQualites}/>
            <CentresInteret addCentresInteret={addCentresInteret} setAddCentresInteret={setAddCentresInteret}/>

            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;