import React, { useState, useEffect } from 'react';
function Formation({addFormation,setAddFormation}) {

    useEffect(()=>{console.log(addFormation.length);console.log(typeof(addFormation[0].titre))},[addFormation]);

    return(
        <>
        <div className="formation">Formation</div>
        <div id="myFormation" className="myFormation" >
            {addFormation.map(({element})=>(<div key={1} >hello</div>))}
        </div>
        </>
    );
}
export default Formation;