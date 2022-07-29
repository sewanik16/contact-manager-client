import "./contacts.css"
import {Link} from "react-router-dom"
function Sidebar(){
    return(
        <>
            <div className="sidebar">
                    <div className="sidebar-top">
                        <h2>Logo</h2>
                        <br/>
                        <label> 📊 Dashboard</label>
                        <br/><br/>
                        <button> 🔢 Total Contacts <b style={{fontSize:"16px"}}>|</b></button>
                    </div>
                    <div className="sidebar-bottom">
                        <Link to="/"> 🔄 Log out</Link>
                    </div>
            </div>
        </>
    )
}
export default Sidebar;