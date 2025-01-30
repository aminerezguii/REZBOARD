import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Rezboard from "./pages/Rezboard";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Rezboard" element={<Rezboard />} />
      </Routes>
    </Router>
  );
}
