import { useState } from "react";

function CsvFileTest(){
    const [csvFile,setcsvFile] = useState()
   
    const submit=()=>{
        const file = csvFile;
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = function(e){
            const text = e.target.result;
            console.log(text)

        }
        
    }

    return(
        <form>
            <input type="file"  id="csv" onChange={(e)=>{setcsvFile(e.target.files[0])}}>
            </input>
            <br/>
            <button onClick={(e)=>{
                e.preventDefault()
                if(csvFile) submit()
            }}>Submit</button>
        </form>
    )
}

export default CsvFileTest;