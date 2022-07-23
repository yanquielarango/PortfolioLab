import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";

import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

import { AuthProvider } from "./context/AuthContext";
import Logout from "./pages/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

import { Toaster } from 'react-hot-toast';
import ThingsBack from "./pages/ThingsBack";
import { DBProvider } from "./context/DbContext";





const App = () => {
  return (
   <>
    <BrowserRouter>   
      <AuthProvider>
      <DBProvider>
        <Navbar/>
        <Toaster />
        <Routes>
          <Route  path="/oddaj-rzeczy" element={<ProtectedRoute>
            <ThingsBack/>
          </ProtectedRoute>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/logout" element={<Logout/>} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>       
      </DBProvider>
      </AuthProvider>
      
      
      
    </BrowserRouter>
    
   </>
  )
}

export default App
