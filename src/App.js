import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Componets/Login/Login";
import Signup from "./Componets/Signup/Signup";
import ProtectedRoutes from "./Services/ProtectedRoutes";
const App = () => {
  return (
    <div className="app-header">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
