import React, { useState, useRef } from 'react';
import { Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Customers from './components/Customers/Customers';
import Partners from './components/Partners/Partners';
import ContactUs from './components/ContactUs/ContactUs';

import Homepage from './pages/Homepage';
import ScanitPage from './pages/Scanit/ScanitPage';

const menus = ["home", "about", "services", "customers", "partners", "contact"];
const secctions = [Home, About, Services, Customers, Partners, ContactUs]

function App() {
  const [visibleSection, setVisibleSection] = useState(menus[0]);
  const headerRef = useRef();

  const setInView = (inView, entry) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout headerRef={headerRef} visibleSection={visibleSection} menus={menus} />}>
          <Route index element={<Homepage secctions={secctions} setInView={setInView} />} />
          <Route path='scanit' element={<ScanitPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
