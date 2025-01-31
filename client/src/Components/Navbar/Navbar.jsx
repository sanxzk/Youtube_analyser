import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css"; // Import the CSS file
import CallBackModal from "../CallBackModal/CallBackModal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar-container">


        <div className="logo-container"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="logo-image" src={logo} alt="Logo" />
          <div className="logo-text"> Youtube Video Analyser</div>
        </div>

        
        <div className="second-part-container">
          <CallBackModal />

          <span
            onClick={() => {
              navigate("/other");
            }}
            className="other-video-button"
          >
            Other videos
          </span>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Navbar;
