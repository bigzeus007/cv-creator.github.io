
function Langues({addLanguage,setAddLanguage}) {
    function removeMyLanguage(index) {
        let myNewList = addLanguage;
        myNewList.splice(index,1,{visible:"invisible"});
        setAddLanguage([...myNewList]);
        console.log(addLanguage);
    }
 //addLanguage[addLanguage.indexOf(element)].visible="invisible";
 //;console.log(typeof(addLanguage.indexOf(element)));
 //setAddLanguage(addLanguage.splice(addLanguage.indexOf(element),1,{index:0,visible:"invisible"}));
 //setAddLanguage(addLanguage.splice(addLanguage.indexOf(element),1,{index:0,visible:"invisible"}));
    
    return(
        <>
        <div className="langues">Language</div>
        <div id="myLanguages" className="myLanguages" >

            {addLanguage.map((element,index)=>(

            <form key={element+" "+index} name="ChoixDeLangue" className={element.visible}>
                <select name="maLangue" style={{width:"100px"}} >
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
                <button style={{color:"red",width:"65px",height:"20px"}} onClick={(event)=>{event.preventDefault();removeMyLanguage(index);console.log(index);}} > Retirer </button>
            </form>))}
        </div>
        </>
    );
}
export default Langues;