import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register(){
    const [name,setName]=useState("")
     const [password,setPassword]=useState("")
      const [confirmpass,setConfirmpass]=useState("")
      const [email,setEmail]=useState("")
    const navigate=useNavigate()
    function handleSubmit(){
    if(password!=confirmpass){
            alert("Password and Confirm password must be equal")
            return
        }
    if(email==""||name==""||password==""||confirmpass==""){
        alert("Fill all the fields")
    }    
    localStorage.setItem("name",name)
    localStorage.setItem("password",password)
    localStorage.setItem('email',email)
    alert("registration successfull")
       navigate("/")
    }
    
    return(
        <>
        <h1>Register</h1>
         <form action="" onSubmit={handleSubmit}>
          <input type="text"  placeholder="Enter the username" onChange={(e)=>setName(e.target.value)}/><br />
          <input type="password"  placeholder="Enter the password" onChange={(e)=>setPassword(e.target.value)}/><br />
          <input type="password"  placeholder="Enter the password Again" onChange={(e)=>setConfirmpass(e.target.value)}/><br />
          <input type="email" name="email" placeholder="'Enter your email"  onChange={(e)=>setEmail(e.target.value)}/><br />
          <button type="submit ">Register</button>
        
       </form>
        </>
    )
}
export default Register