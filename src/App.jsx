import { useState } from "react";
import "./App.css";
import Appointment from "./Appointment";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Appointment />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
