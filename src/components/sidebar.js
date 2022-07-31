// import "./contacts.css"
import {Link} from "react-router-dom"
import {FiLogOut} from "react-icons/fi"
import {MdContacts} from "react-icons/md"
function Sidebar(){
    return(
        <>
            <div className="sidebar">
                    <div className="sidebar-top">
                        <h2>Logo</h2>
                        <br/>
                        <label> 📊 Dashboard</label>
                        <br/><br/>
                        <button> <MdContacts size={"16px"}/> Total Contacts <b style={{fontSize:"16px"}}>|</b></button>
                    </div>
                    <div className="sidebar-bottom">
                        <Link to="/"> <FiLogOut size={"16px"}/> Log out</Link>
                    </div>
            </div>
        </>
    )
}
export default Sidebar;