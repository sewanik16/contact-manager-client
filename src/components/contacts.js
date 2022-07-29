import Sidebar from "./sidebar";
import Header from "./header"
import ImportModal from "./modal";
import React from "react";

function Contacts(){
    let arr=[1,2,3,4,5,6]
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
            <div className="container">
                <Sidebar/>
                <Header/>
                <ImportModal show={modalShow} onHide={() => setModalShow(false)}/>

                <div className="contacts">
                    <div className="row1">
                        <div>
                            <span> 📅 Select Date </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span> 🧮 Filters </span>
                        </div>
                        <div>
                            <span> 🧺 Delete </span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span onClick={()=>{setModalShow(true)}}> 🔃 Import</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>⬆️ Export</span>
                        </div>
                    </div>
                    <div className="row2">
                         <div className="list-c">Name</div><div className="list-c">Designation</div><div className="list-c">Company</div><div className="list-c">Industry</div>
                         <div className="list-c">Email</div><div className="list-c">Phone number</div><div className="list-c">Country</div><div className="list-c">Action</div>
                    </div>
                    {
                        arr.map(()=>{
                            return(
                                <>
                                <div className="row3">
                            <div className="list">Nikhil Rathod</div><div className="list">Full stack engineer</div><div className="list">Google</div><div className="list">IT</div>
                            <div className="list">devsotnik@gmail.com</div><div className="list">8308741038</div><div className="list">India</div><div>✏️  ❌</div>
                    </div>
                                </>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}
export default Contacts;