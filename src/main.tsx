import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./reset.css";
import "./base.css";

import Home from "./pages/Home";
import About from "./pages/About";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  rootElement
);
