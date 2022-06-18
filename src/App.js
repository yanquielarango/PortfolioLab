import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";

import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

import { AuthProvider } from "./context/AuthContext";
import Logout from "./pages/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import BackTings from "./components/BackTings";





const App = () => {
  return (
   <>
    <BrowserRouter>   
      <AuthProvider>
        <Navbar/>
        <Routes>
          <Route  path="/oddaj-rzeczy" element={<ProtectedRoute>
            <BackTings/>
          </ProtectedRoute>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/logout" element={<Logout/>} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>       

      </AuthProvider>
      
      
      
    </BrowserRouter>
    
   </>
  )
}

export default App
