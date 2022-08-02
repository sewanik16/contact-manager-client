// import "./contacts.css"
import {Link} from "react-router-dom"
import {FiLogOut} from "react-icons/fi"
import {MdContacts} from "react-icons/md"
function Sidebar(){
    const logout = ()=>{
        localStorage.setItem("authorization","")
        // localStorage.setItem("authorization", loginData.data.authorization);
        console.log(logout)
    }
    
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
                        <Link to="/"> <FiLogOut size={"16px"} /> <span onClick={logout}>Log out</span></Link>
                    </div>
            </div>
        </>
    )
}
export default Sidebar;