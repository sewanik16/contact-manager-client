import "./login.css";

function Signup() {

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
             
                <input className="form-item" type="text" placeholder="Mail ID" />
                <input className="form-item" type="password" placeholder="Password" />
                <input className="form-item" type="password" placeholder="Confirm Password" />
                <br/>
                <button className="form-item form-btn-active">Sign up</button>
                
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



