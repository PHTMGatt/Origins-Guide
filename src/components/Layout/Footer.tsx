import React, { useContext } from "react";
import { EffectsContext } from "../Layout/Effects";
import "./Footer.css";

const Footer = () => {
  const { toggleEffects, showEffects } = useContext(EffectsContext);

  return (
    <footer className={`footer ${showEffects ? "footer-glow" : ""}`}>
      <div
        className="footer-lock"
        title="Click to toggle visual effects"
        onClick={toggleEffects}
      >
        Free Samantha <span className="footer-toggle-label">(toggle fx)</span>
      </div>
    </footer>
  );
};

export default Footer;
