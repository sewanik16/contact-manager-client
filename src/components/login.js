import "./login.css";
import {Link} from "react-router-dom"

function Login() {

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
             
                <input className="form-item" type="text" placeholder="User ID" />
                <input className="form-item" type="password" placeholder="Password" />
                <br/>
                <button className="form-item form-btn-active">Sign in</button>
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



