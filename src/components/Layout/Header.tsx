import React, { useContext } from "react";
import { EffectsContext } from "../Layout/Effects";
import ReviveIcon from "../../assets/Pictures/Revive_Icon.png";
import Nav from "./Nav";
import "./Header.css";

const Header = () => {
  const { showEffects } = useContext(EffectsContext);

  return (
    <header className={`site-header ${showEffects ? "header-glow" : ""}`}>
      <div className="title-box">
        <img
          src={ReviveIcon}
          alt="Revive Icon"
          className={showEffects ? "revive-header-icon pulse" : "revive-header-icon"}
        />
        <h1>
          <span className="black-text">Origins Easter Egg</span>{" "}
          <span className="white-text">Little Lost Girl</span>
        </h1>
        <img
          src={ReviveIcon}
          alt="Revive Icon"
          className={showEffects ? "revive-header-icon pulse" : "revive-header-icon"}
        />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
