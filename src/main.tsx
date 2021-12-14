import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS files
import "./reset.css";
import "./base.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// Components
import Footer from "./components/Footer";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  rootElement
);
