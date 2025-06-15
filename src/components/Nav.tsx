import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegSnowflake } from "react-icons/fa";
import { GiWhirlwind, GiFireTail, GiLightningHelix, GiCrownedSkull } from "react-icons/gi";
import "../Styles/ComponentStyles/Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link main ${isActive ? "active main-active" : ""}`
          }
        >
          <GiCrownedSkull /> <span className="main-text">Main Guide</span>
        </NavLink>

        <NavLink
          to="/IceStaff"
          className={({ isActive }) =>
            `nav-link ice ${isActive ? "active ice-active" : ""}`
          }
        >
          <FaRegSnowflake /> Ice Staff
        </NavLink>

        <NavLink
          to="/FireStaff"
          className={({ isActive }) =>
            `nav-link fire ${isActive ? "active fire-active" : ""}`
          }
        >
          <GiFireTail /> Fire Staff
        </NavLink>

        <NavLink
          to="/WindStaff"
          className={({ isActive }) =>
            `nav-link wind ${isActive ? "active wind-active" : ""}`
          }
        >
          <GiWhirlwind /> Wind Staff
        </NavLink>

        <NavLink
          to="/LightningStaff"
          className={({ isActive }) =>
            `nav-link lightning ${isActive ? "active lightning-active" : ""}`
          }
        >
          <GiLightningHelix /> Lightning Staff
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
