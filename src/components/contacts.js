import Sidebar from "./sidebar";
import Header from "./header"
import React from "react";
import Modal from 'react-bootstrap/Modal';
import AddForm from "./form";
import {useState} from "react"

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
                            <span> 🧺 Delete </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span onClick={handleShow}> 🔃 Import</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>⬆️ Export</span>
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
            <Modal show={show} onHide={handleClose} centered style={{marginLeft:"45%",width:"200px"}}>
            {/* <Modal.Header closeButton>
                <Modal.Title><img src="upload.png" style={{width:"50px",margin:"auto"}}/></Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
               <AddForm/>
            </Modal.Body>

            {/* <Modal.Footer>
            </Modal.Footer> */}
            </Modal>
        </>
    )
}
export default Contacts;