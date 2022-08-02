import Sidebar from "./sidebar";
import "./contacts.css"
import Header from "./header"
import React from "react";
import Modal from 'react-bootstrap/Modal';
import ImportForm from "./importForm";
import {useState} from "react"
import {AiFillDelete} from "react-icons/ai"
import {MdImportExport} from "react-icons/md"
import {BiDownload} from "react-icons/bi"
import {BsFilter,BsCalendar4Week} from "react-icons/bs"
import { useEffect } from "react";

import {parse} from "papaparse"
import axios from "axios"

function Contacts(){
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [deleteShow1, setDeleteShow1] = useState(false);
    const [value,setvalue]=useState("")
    const [tickes,settickes] = useState([])
    const [csvData,setCsvData] = useState([])
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleDeleteClose = () => setDeleteShow(false);
    const handleDeleteShow = () => setDeleteShow(true);
    const handleDeleteClose1 = () => setDeleteShow1(false);
    const handleDeleteShow1 = () => setDeleteShow1(true);

    const authToken = localStorage.getItem("authorization");
    console.log(authToken)
    useEffect(()=>{
        axios({
            url: "http://localhost:5000/contacts",
            method: "get",
            headers:{
            authorization : authToken
            },
            data: {}
        }).then((res)=>{
            // console.log(res.data[0])
           setCsvData(...csvData, res.data[0].contact)
           console.log(csvData[0].name)
        }).catch((err)=>{
            console.log("eee",err.message)
        })
    },[])


    const Draghandler = (e)=>{
        e.preventDefault()  
    }
   
    const Drophandler = (e)=> {
        e.preventDefault()
       Array.from(e.dataTransfer.files).map(async file=>{
        const text =await file.text()
        let {data} = parse(text,{header:true})
            if(data[data.length-1].Name===""){
                data.pop()
            }
        // setCsvData(data)
        // console.log(csvData[0].name)
        axios({
          url: "http://localhost:5000/contacts/add",
          method: "POST",
          headers: {
            authorization: authToken,
            "Content-Type": "application/json"
          },
          data: data
      }).then( ()=> {
        handleClose()
        handleShow1()
        setTimeout(() => {
            handleClose1()
        }, 2000);
         console.log("data saved successfully")
      }).catch((err)=> {
        console.log(err)          
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
        // console.log(data)
        setvalue("")
        axios({
          url: "http://localhost:5000/contacts/add",
          method: "POST",
          headers: {
            authorization: authToken,
            "Content-Type": "application/json"
          },
          data: data
      }).then( ()=> {
        handleClose()
        handleShow1()
        setTimeout(() => {
            handleClose1()
        }, 2000);
         console.log("data saved successfully")
      }).catch((err)=> {
        console.log(err)          
      })
       })
    }

 

 const deletecollector = (e) => {
    const {value , checked}=e.target;
    if(checked){
        settickes([...tickes, value])
    }else{
      settickes(tickes.filter((e)=>e!==value))
      
    }
    console.log(tickes)
  }
 const deleteAll = (e, id)=>{
       let arr = csvData.map((ele)=>{
                return ele._id
        })
        settickes(...tickes, arr)
        console.log(e.target.checked)
        console.log(tickes)

        let ele = document.getElementById(id);
        let inputElements = ele.getElementsByTagName('input');
        for (let i = 0; i < inputElements.length; i++) {
            if (inputElements[i].type == 'checkbox')
                {
                    if(e.target.checked)
                    inputElements[i].checked = true;
                    else
                    inputElements[i].checked = false;
                }
        }   
 }

  const deletehandler = (e)=>{
    axios({
      url:"http://localhost:5000/contacts/delete",
      method:"DELETE",
      headers:{
          authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRkQGdtYWlsLmNvbSIsImlhdCI6MTY1OTM1MTYwNX0.ODjO3zAc9qc7LOONqccAwrxkDDtlrmy5zMFyrRMkQUs"
      },
      data:tickes
     }).then(()=>{
        handleDeleteClose()
        handleDeleteShow1()
    //   setget()
     })
  }


    return(
        <>
            <div className="container">
                <Sidebar/>
                <Header/>
                <div className="contacts">
                    <div className="row1">
                        <div>
                            <span> <BsCalendar4Week/>  Select Date </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span> <BsFilter/> Filters </span>
                          
                        </div>
                        <div>
                            <span onClick={handleDeleteShow} > <AiFillDelete size={"18px"}/> Delete </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span onClick={handleShow}> <MdImportExport size={"20px"}/> Import</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><BiDownload size={"20px"}/> Export</span>
                        </div>
                    </div>
                <table style={{width:"100%",backgroundColor:"skyblue",color:"white",padding:"10px"}} className="rowchild">
                        <thead style={{border:"1px solid white", height:"50px"}}>
                        <tr >
                            <th><input type="checkbox" onChange={(e)=> deleteAll(e, "tbody")}/></th>
                            <th >Name </th>
                            <th >Designation </th>
                            <th >Company </th>
                            <th >Industry </th>
                            <th >Email</th>
                            <th >Phone number</th>
                            <th>Country</th>
                            <th >Action</th>
                        </tr>
                        </thead>
                        <tbody id="tbody">
                    {   
                        csvData.map((item, idx) => {
                        return (
                            <tr key={idx} >
                                 <td >
                                <input type="checkbox" 
                                value={item._id} onChange={(e)=> deletecollector(e)}
                                checked={item.tickes}
                                /></td >
                                     <td >{item.name }</td>
                                    <td >{item.designation}</td>
                                    <td >{item.company}</td>
                                    <td >{item.industry}</td>
                                    <td >{item.email}</td>
                                    <td >{item.phoneNumber}</td>
                                    <td >{item.country}</td>
                                    <td><i className="material-icons">edit</i>
                                        <i className="material-icons">delete</i>
                                    </td>
                            </tr>
                        )
                        })
                    }
            </tbody>
                        <tbody>
                        
                        </tbody>
          </table>
                    
                </div>
            </div>
            <Modal show={show} onHide={handleClose} animation={false} centered 
            style={{marginLeft:"40%",marginTop:"10%",width:"300px",height:"300px",lineHeight:"40px",textAlign:"center"}}>
            <Modal.Body>
               <ImportForm f1={Draghandler} f2={Drophandler} f3={filehandler} value={value} f4={handleClose}/>
            </Modal.Body>
            </Modal>

            <Modal show={show1} onHide={handleClose1} animation={false} centered 
            style={{marginLeft:"40%",marginTop:"10%",width:"300px",height:"300px",lineHeight:"40px",textAlign:"center"}}>
            <Modal.Body>
               <h4>File Imported</h4>
               <h3 style={{color:"green"}}>successfully</h3>
            </Modal.Body>
            </Modal>

            <Modal show={deleteShow} onHide={handleDeleteClose} animation={false} centered 
            style={{marginLeft:"40%",marginTop:"10%",width:"350px",height:"300px",lineHeight:"40px",textAlign:"center"}}>
            <Modal.Body>
               <div>
                    <img src="delete.png" style={{width:"20px"}} alt=""/>
                    <h4>Delete Contacts</h4>
                    <p>Sure you want to delete this contacts?</p>
                    <span style={{backgroundColor:"skyblue",color:"white",padding:"5px",marginRight:"20px"}}> Cancel </span>
                    <span onClick={(e)=>deletehandler(e)} style={{cursor:"pointer"}}>OK</span>
               </div>
            </Modal.Body>
            </Modal>
            <Modal show={deleteShow1} onHide={handleDeleteClose1} animation={false} centered 
            style={{marginLeft:"40%",marginTop:"10%",width:"350px",height:"300px",lineHeight:"40px",textAlign:"center"}}>
            <Modal.Body>
               <div>
                    <img src="delete.png" style={{width:"20px"}} alt=""/>
                    <h4>DELETED</h4>
                    <p>contacts deleted successfully</p>
               </div>
            </Modal.Body>
            </Modal>


        </>
    )
}
export default Contacts;