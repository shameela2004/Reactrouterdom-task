import { BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { Route,Router,Routes } from "react-router-dom"

function App(){
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
  )
}
export default App