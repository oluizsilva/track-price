import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NotaDetalhada from "./screens/NotaDetalhada";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />          
        <Route path="/nota/:id" element={<NotaDetalhada />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
