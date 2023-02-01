import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.scss";
import "./styles/header.scss";

import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>AppS</Routes>
    </Router>
  );
};

export default App;
