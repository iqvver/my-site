import React from "react";
import { Routes, Route } from "react-router-dom";
import './css/index.min.css';
import 'animate.css';
import AppContainer from "./AppContainer";
import Politica from "./politica";

function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<AppContainer />} />
        <Route path="/politica" element= {<Politica />} />
      </Routes>
    </>
  );
}

export default App;
