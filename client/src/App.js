import Home from './pages/home/Home';
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Login from './pages/login/Login';
import './index.css'
import Single from "./pages/single/Single";
import NavBar from './components/Navbar/Navbar';
import Write from "./pages/write/Write";
function App() {
  const { user } = useContext(Context);
  return (
      <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <><NavBar/> <Home /></> : <Login />} />
        <Route path="/write" element={user ? <><NavBar/><Write /> </>: <Home />}/>
        <Route path="/post/:postId"  element={<Single />} />
         
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;