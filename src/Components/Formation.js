import React, { useState, useEffect } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function Formation({addFormation,setAddFormation}) {

    useEffect(()=>{console.log(addFormation.length);console.log(typeof(addFormation[0].titre))},[addFormation]);

    return(
        <>
        <div className="formation">Formation</div>
        <div id="myFormation" className="myFormation" >
            {addFormation.map((element)=>(
            <div key={element.index} >
                <label htmlFor="dateDebut">DE</label><input id="dateDebut" type="date"></input> <label htmlFor="dateFin">A</label> <input id="dateFin" type="date"></input>
                <TextareaAutosize style={{width:"63%"}} > Specialite</TextareaAutosize>
                <label >Organisme <TextareaAutosize style={{width:"65%",backgroundColor:"transparent",color:"blue",fontSize:"14px"}}></TextareaAutosize></label>
                <label >Ville <TextareaAutosize style={{width:"21%",backgroundColor:"transparent",color:"blue",fontSize:"14px"}}></TextareaAutosize></label>

                </div>))}
        </div>
        </>
    );
}
export default Formation;