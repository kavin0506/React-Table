import { useState } from "react";

const SignIn=()=>{

    const[signIn,setSignIn ]=useState(false)



const handleChange=()=>{
    setSignIn(signIn ? false:true)

}


    return(

        <div>
            <p>{signIn?"hello welcome":"please signIn"} </p>
            <button onClick={()=>handleChange()}>{signIn ? "signOut":"signIn"}</button>
        </div>
    )
}

export default SignIn;