import React ,{useState} from "react"
import SignUp from "../component/Signup"
import Login from "../component/Login"
import Image from "../Images/Burgerroll.jpg";
const Register = ()=>{

    const [register , setregister] = useState(1);

    const signup = ()=>{
        setregister(1);
    }
    const login = ()=>{
        setregister(2);
    }


    return(<>
    <div class="flex justify-center">
        <img src={Image} class="h-40 w-1/2"></img>
    </div>
      <div class="text-center">
        <button id="create" onClick={signup} class="hover:bg-green-500 px-4 rounded-md">Create SignUp</button>
        <button id="login" onClick={login} class="px-4 hover:bg-green-500 rounded-md">Login</button>
        
      </div>
      {register==1?<div><SignUp /></div>:<div><Login /></div>}

    </>);
}
export default Register;