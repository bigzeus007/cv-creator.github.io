import React, { useState, useEffect } from 'react';


function Formation({addFormation,setAddFormation}) {

    useEffect(()=>{console.log(addFormation.length);console.log(typeof(addFormation[0].titre))},[addFormation]);

    return(
        <>
        <div className="formation">Formation</div>
        <div id="myFormation" className="myFormation" >
            {addFormation.map((element)=>(
            <div key={element.index} className="uneFormation" >
                <label htmlFor="dateDebut">DE</label><input id="dateDebut" type="date" style={{height:"30px",width:"150px"}}></input> <label htmlFor="dateFin">A</label> <input id="dateFin" type="date" style={{height:"30px",width:"150px"}}></input>
                <textarea style={{width:"63%"}} > Specialite</textarea>
                <label >Organisme <textarea style={{width:"65%",backgroundColor:"transparent",color:"blue",fontSize:"14px"}}></textarea></label>
                <label >Ville <textarea style={{width:"21%",backgroundColor:"transparent",color:"blue",fontSize:"14px"}}></textarea></label>

                </div>))}
        </div>
        </>
    );
}
export default Formation;