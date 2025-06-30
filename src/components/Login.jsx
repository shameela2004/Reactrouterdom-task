import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
    const navigate=useNavigate()
    const navigate2=useNavigate()
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    function handleSubmit(){
         let name1=localStorage.getItem('name')
         let pass=localStorage.getItem("password")
         if(name==name1 &&password==pass){
            alert("login Successfull")
            navigate("/home")
         }
         else
         alert("login Failed : Invalid username or password")
    }
    return(
        <>
      <h1>Login</h1>
       <form action="" onSubmit={handleSubmit}>
          <input type="text"  placeholder="Enter the username" onChange={(e)=>setName(e.target.value)}/><br />
          <input type="password"  placeholder="Enter the password" onChange={(e)=>setPassword(e.target.value)}/><br />
          <button type="submit">Login</button>
       </form>
       <span>Don't have an account then Register</span>
       <button onClick={()=>navigate2("/register")}><link to="/register"/>Register</button>
        </>
    )
}
export default Login