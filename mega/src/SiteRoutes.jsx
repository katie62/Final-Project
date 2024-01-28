import React from "react";
import Homepage from "./components/Homepage/Homepage";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { Route, Routes } from "react-router-dom";

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/hakkimizda" element={<About />} />
      <Route path="/projeler" element={<Projects />} />
      <Route path="/iletisim" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
