import "./login.css";
import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Signup() {
  let navigate = useNavigate()
  const [signup, setSignup] = useState({username: "", password: ""})

  const handleUserAdd = (e)=> {
    e.preventDefault()
      axios({
          url: "http://localhost:5000/user/signup",
          method: "POST",
          headers: {
            
           },
          data: {username: signup.username, password: signup.password}
      }).then((data)=> {
         console.log(data)
         navigate("/")
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
                    <p style={{fontSize:"10px"}}>Create New Account</p>
                    
                </div>
                <br/>   
              <form>
             
                <input className="form-item" type="text" placeholder="Mail ID" onChange={(e)=> {setSignup({...signup, username: e.target.value})}}/>
                <input className="form-item" type="password" placeholder="Password" onChange={(e)=> {setSignup({...signup, password: e.target.value})}}/>
                <input className="form-item" type="password" placeholder="Confirm Password" />
                <br/>
                <button className="form-item form-btn-active" onClick={handleUserAdd}>Sign up</button>
                
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
export default Signup;



