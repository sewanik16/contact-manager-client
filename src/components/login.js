import "./login.css";
import {Link,useNavigate} from "react-router-dom"
import {useState} from "react"
import axios from "axios"


function Login() {
  let navigate = useNavigate()
  const [login, setLogin] = useState({username: "", password: ""})
  const handleLogin = (e)=> {
    e.preventDefault()
      axios({
          url: "http://localhost:5000/user/login",
          method: "POST",
          headers: {
          },
          data: {username: login.username, password: login.password}
      }).then((loginData)=> {
         localStorage.setItem("authorization", loginData.data.authToken);
         navigate("/contacts")
      }).catch((err)=> {
          console.log(err)
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
              <form>
             
                <input className="form-item" type="text" placeholder="User ID" onChange={(e)=> {setLogin({...login, username: e.target.value})}}/>
                <input className="form-item" type="password" placeholder="Password" onChange={(e)=> {setLogin({...login, password: e.target.value})}}/>
                <br/>
                <button className="form-item form-btn-active" onClick={handleLogin}>Sign in</button>
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
    </>
  );
}
export default Login;



