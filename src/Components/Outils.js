import React, { useEffect, useState } from 'react';

function Outils({addFormation, setAddFormation,profil,setProfil,addExperience,setAddExperience,realisation,setRealisation,addLanguage,setAddLanguage}) {
    let a=addFormation.length
    useEffect(()=>{
        
    },[addFormation])
    
   

    return(
        <div className="Outils">
            <div> Boite a outils</div>

            <button id="profil" onClick={()=>{
                setProfil(profil==='' ? "none" : "");
                
                }}
                 className="Outil" style={{display:"block",height:"40px"}}>Ajouter Profil</button>

            
            <button id="addFormation" onClick={()=>{
                setAddFormation([...addFormation,{index:a ,titre:"", contenu:""}]);
                
                }}
                 className="Outil" style={{display:"block",height:"40px"}}>Ajouter Formation</button>
            <button id="addExp" onClick={()=>{
                setAddExperience([...addExperience,{index:a ,titre:"", contenu:""}]);
                
                }}
                 className="Outil" style={{display:"block",height:"40px"}}>Ajouter Experience</button>

            <button id="realisation" onClick={()=>{
                setRealisation(realisation==='' ? "none" : "");
                
                }}
                className="Outil" style={{display:"block",height:"40px"}}>Ajouter Realisation</button>
            <button id="langue" onClick={()=>{setAddLanguage([...addLanguage,(addLanguage.length+1)]);console.log(addLanguage.length)}}
                className="Outil" style={{display:"block",height:"40px"}}>Ajouter Langue</button>
        </div>
    );
}
export default Outils;