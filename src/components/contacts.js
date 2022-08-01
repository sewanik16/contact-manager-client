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

function Contacts(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    let arr=[1,2,3,4,5,6]

    return(
        <>
            <div className="container">
                <Sidebar/>
                <Header/>
                <div className="contacts">
                    <div className="row1">
                        <div>
                            <span> 📅 Select Date </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span> 🧮 Filters </span>
                        </div>
                        <div>
                            <span style={{color:"red"}}> <AiFillDelete size={"18px"}/> Delete </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span onClick={handleShow}> <MdImportExport size={"20px"}/> Import</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><BiDownload size={"20px"}/> Export</span>
                        </div>
                    </div>
                    <div className="row2">
                         <div >Name</div><div>Designation</div><div>Company</div>
                         <div >Industry</div>
                         <div >Email</div><div >Phone number</div><div>Country</div>
                         <div >Action</div>
                    </div>
                    {
                        arr.map(()=>{
                            return(
                                <>
                                <div className="row3">
                            <div >Nikhil Rathod</div>
                            <div >Full stack engineer</div>
                            <div >Google</div><div >IT</div>
                            <div >devsotnik@gmail.com</div>
                            <div >8308741038</div>
                            <div >India</div><div>✏️  ❌</div>
                    </div>
                                </>
                            )
                        })
                    }
                    
                </div>
            </div>
            <Modal show={show} onHide={handleClose} animation={false} centered 
            style={{marginLeft:"40%",marginTop:"10%",width:"300px",height:"300px",lineHeight:"40px",textAlign:"center"}}>
            {/* <Modal.Header closeButton>
                <Modal.Title><img src="upload.png" style={{width:"50px",margin:"auto"}}/></Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
               <ImportForm/>
            </Modal.Body>

            {/* <Modal.Footer>
            </Modal.Footer> */}
            </Modal>
        </>
    )
}
export default Contacts;