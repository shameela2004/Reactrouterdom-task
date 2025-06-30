import { useNavigate } from "react-router-dom"

function Home(){
    const navigate=useNavigate()
    return(
       <>
      <h1>This is the home page</h1>
      <button onClick={()=>navigate("/")}>Logout</button>
       </>
    )
}
export default Home