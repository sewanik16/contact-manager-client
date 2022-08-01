import React, { useState } from 'react'
import {parse} from "papaparse"
import axios from "axios"

function ImportForm() {
    const [value,setvalue]=useState("")
    const Draghandler = (e)=>{
        e.preventDefault()  
    }
    const authToken = localStorage.getItem("authorization");
    const Drophandler = (e)=> {
        e.preventDefault()
       Array.from(e.dataTransfer.files).map(async file=>{
        const text =await file.text()
        let {data} = parse(text,{header:true})
        if(data[data.length-1].Name===""){
            data.pop()
        }
        console.log(data)
        axios({
          url: "http://localhost:5000/contacts/add",
          method: "POST",
          headers: {
            authorization: authToken,
            "Content-Type": "application/json"
          },
          data: data
      }).then(()=> {
         console.log("data saved successfully")
      }).catch((err)=> {
          console.log(err.message)
      })
       })

    }
    const filehandler =(e)=>{
       Array.from(e.target.files).map(async file=>{
        const text =await file.text()
        let {data} = parse(text,{header:true})
        if(data[data.length-1].Name===""){
            data.pop()
        }
        console.log(data)
        setvalue("")
       })
    }
  return (
    <div style={{minHeight : "200px",textAlign:"center"}}
    onDragOver={(e)=>Draghandler(e)}
    onDrop ={(e)=>Drophandler(e)}
    >
      <img src='upload.png' style={{width:"30px"}} alt=""/>
      <h6 style={{textAlign:"center",margin:"10px"}}>Import File</h6>
      <input type="file" onChange={(e)=>filehandler(e)} value={value} id="File" style={{position:"absolute",display:"none"}}/>
      <span>Drop Files Here</span> 
      <br/><br/>
      <button style={{padding:"0px 20px",background:"skyblue",border:"none",borderRadius:"4px",color:"white"}}>Cancel</button>

    </div>
  )
}

export default ImportForm;