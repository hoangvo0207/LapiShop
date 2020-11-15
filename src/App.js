import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/index";
import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
