// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import MainGuide from "./pages/MainGuide";
import FireStaff from "./pages/FireStaff";
import IceStaff from "./pages/IceStaff";
import WindStaff from "./pages/WindStaff";
import LightningStaff from "./pages/LightningStaff";

// Global Styles
import "./styles/global.css";

function App() {
  return (
    <div className="layout-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainGuide />} />
          <Route path="/FireStaff" element={<FireStaff />} />
          <Route path="/IceStaff" element={<IceStaff />} />
          <Route path="/WindStaff" element={<WindStaff />} />
          <Route path="/LightningStaff" element={<LightningStaff />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
