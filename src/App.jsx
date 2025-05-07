import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate every time the element comes into view
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
