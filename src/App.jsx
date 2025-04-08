import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"


function App() {

  return (
    <>
    <BrowserRouter basename="/">
        <Routes>
            <Route element={<Body/>} path="/">
                <Route element={<Login/>} path="/login"/>
                <Route element={<Profile/>} path="/profile"/>
            </Route>
        </Routes>
    </BrowserRouter>
    
        <Navbar/>
       </>
  )
}

export default App
