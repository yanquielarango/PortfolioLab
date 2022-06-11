import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";

import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const App = () => {
  return (
   <>
    <BrowserRouter> 


  
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
    
   </>
  )
}

export default App
