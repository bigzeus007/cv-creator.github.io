import React, { useState, useEffect } from 'react';
function Formation({addFormation,setAddFormation}) {
useEffect(()=>{
    console.log(addFormation.map((element)=>{}))},[addFormation]);
    

    return(
        <>
        <div className="formation">Formation</div>
        <div id="myFormation" className="myFormation" children={"mesFormations"}></div>
        </>
    );
}
export default Formation;