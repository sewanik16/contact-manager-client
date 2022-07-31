// import "./contacts.css"
import {BsSearch} from "react-icons/bs"
function Header(){
    return(
        <>
            <div className="header">
                <div><h3>Total Contacts</h3></div>
                <div className="search">
                    <BsSearch style={{marginBottom:"4px"}}/>
                    <input type="search" placeholder="Search by Email Id...." />
                </div>
                <div className="user-logo">
                    <img src="user.png" alt="img"/>
                    <div className="user-name">
                        <p>Nikhil Rathod</p>
                        <p>Super Admin</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;