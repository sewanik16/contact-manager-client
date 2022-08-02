import "./login.css";
import {Link,useNavigate} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import Modal from 'react-bootstrap/Modal';
import {FiUserX} from "react-icons/fi"

function Login() {
  let navigate = useNavigate()
  const [login, setLogin] = useState({username: "", password: ""})
  const [show,setShow] = useState()

  const handleShow = () =>{setShow(true)}
  const handleClose = () =>{setShow(false)}

  const handleLogin = (e)=> {
    e.preventDefault()
 
      axios({
          url: "http://localhost:5000/user/login",
          method: "POST",
          headers: {
          },
          data: {username: login.username, password: login.password}
      }).then((loginData)=> {
        console.log("login data",loginData)
         localStorage.setItem("authorization", loginData.data.authorization);
        
         navigate("/contacts")
      }).catch((err)=> {
          handleShow()
          console.log("user not found")
      })
    }



    let arr2=[1,1,1,1,1,1,1]
  return (
    <>
      <div className="container">
      
        <div className="circle-top"></div>
        <div className="centered-div">
          <div className="centered-left">
          <div className="dot-left">
          {
                arr2.map(()=>{
                    return(
                        <>
                        <div className="dot-circle"></div>
                        <div className="dot-circle"></div>
                        <div className="dot-circle"></div>
                        <div className="dot-circle"></div>
                        <div className="dot-circle"></div>
                        <div className="dot-circle"></div>
                        </>
                    )
                }) 
          }
          
          </div>
          
          </div>
          <div className="centered-middle">
                <div className="logo">
                <h1>Logo</h1>
                    <p style={{fontSize:"10px"}}>Enter your credentials to access your account</p>
                    
                </div>
                <br/>   
              <form >
             
                <input required className="form-item" type="text" placeholder="User ID" onChange={(e)=> {setLogin({...login, username: e.target.value})}}/>
                <input required className="form-item" type="password" placeholder="Password" onChange={(e)=> {setLogin({...login, password: e.target.value})}}/>
                <br/>
                <button type="submit" className="form-item form-btn-active" onClick={handleLogin}>Sign in</button>
                <Link to="/signup">Sign up</Link>
                
              </form>
          </div>
          <div className="centered-right">
            <div className="dot-right">
            {
                arr2.map(()=>{
                    return(
                        <>
                        <div className="dot-circle"></div>
                        <div className="dot-circle"></div>
                        <div className="dot-circle"></div>
                        <div className="dot-circle"></div>
                        <div className="dot-circle"></div>
                        <div className="dot-circle"></div>
                        </>
                    )
                }) 
          }
            </div>
          </div>
        </div>
        <div className="circle-bottom"></div>
      </div>

      <div>
      <Modal show={show} onHide={handleClose} animation={false} centered 
            style={{height:"400px",textAlign:"center",color:"red"}}>
            <Modal.Body>
              <h3><FiUserX/></h3>
               <h6>User not found || Something wrong</h6>
            </Modal.Body>
            </Modal>
      </div>
    </>
  );
}
export default Login;



