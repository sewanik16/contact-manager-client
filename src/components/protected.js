import { Navigate , Outlet} from "react-router-dom"

function Protected(){
    const auth = localStorage.getItem("authorization")
    // console.log("auth",auth)
    return auth ? <Outlet/> : <Navigate to="/signup"></Navigate>
}

export default Protected;