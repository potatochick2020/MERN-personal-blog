import Home from './pages/home/Home';
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Login from './pages/login/Login';
import './index.css'

function App() {
  const { user } = useContext(Context);
  return (
      <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;