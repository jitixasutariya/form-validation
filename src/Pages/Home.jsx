import React from "react";
import { useNavigate } from "react-router-dom";
import "../Componets/Login/Login.css";

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loginUser");
    navigate("/login");
  };
  return (
    <div
      className="home-page"
      style={{ textAlign: "center", fontSize: "38px", fontWeight: "900" }}
    >
      Hello Welcome{" "}
      <span
        style={{
          padding: "10px",
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "900",
          color: "orange",
        }}
      >
        {userName.name}
      </span>
      <div className="logout-contianer">
        <button type="button" className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
