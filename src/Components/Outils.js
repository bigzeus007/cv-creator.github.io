import React, { useEffect, useState } from 'react';
import App from '../App';

function Outils({addFormation, setAddFormation}) {
    let a=addFormation.length
    useEffect(()=>{
        
    },[addFormation])
    
   

    return(
        <div className="Outils">
            <div> Boite a outils</div>
            <button id="addFormation" onClick={()=>{
                setAddFormation([...addFormation,{index:a ,titre:"", contenu:""}]);
                
                }}
                 className="Outil" style={{display:"block",height:"40px"}}>Ajouter Formation</button>
            <button id="addExp" className="Outil" style={{display:"block",height:"40px"}}>Ajouter Experience</button>
            <button id="realisation" className="Outil" style={{display:"block",height:"40px"}}>Ajouter Realisation</button>
            <button id="langue" className="Outil" style={{display:"block",height:"40px"}}>Ajouter Langue</button>
        </div>
    );
}
export default Outils;