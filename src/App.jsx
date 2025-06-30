import { BrowserRouter, HashRouter } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import { Route,Router,Routes } from "react-router-dom"

function App(){
  return (
  <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </HashRouter>
  </>
  )
}
export default App