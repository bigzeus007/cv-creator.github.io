
import { useEffect } from "react";

function Langues({addLanguage,setAddLanguage}) {

    useEffect(()=>{console.log(addLanguage.length);console.log(typeof(addLanguage))},[addLanguage]);
    
    return(
        <>
        <div className="langues">Language</div>
        <div id="myLanguages" className="myLanguages" >
            {addLanguage.map((element)=>(

            <form key={element.index} name="ChoixDeLangue">
                <select id="maLangue" name="maLangue" style={{width:"100px"}} >
                    <option value="Anglais">ANGLAIS</option>
                    <option value="FRANCAIS">FRANCAIS</option>
                    <option value="ESPAGNOL">ESPAGNOL</option>
                    <option value="ARABE">ARABE</option>
                    <option value="MANDARIN">MANDARIN</option>
                </select>
                
                <input type="radio" name="langue"></input>
                <input type="radio" name="langue"></input>
                <input type="radio" name="langue"></input>
                <input type="radio" name="langue"></input>
                <input type="radio" name="langue"></input>
                <button style={{color:"red",width:"65px",height:"20px"}} >Retirer</button>
            </form>))}
        </div>
        </>
    );
}
export default Langues;