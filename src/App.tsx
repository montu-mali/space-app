import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/HeaderFile/Header';
import Home from './Component/HomePage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Video from './Component/Videopage/Video';
import NewsEvent from './Component/NewsPage/NewsEvent';
import HelioPhysics from './Component/HelioPhysics/HelioPhysics';
import ParkerProbe from './Component/ParkerProbe/ParkerProbe';
import SolarF from './Component/SolarF/SolarF';
import SolarE from './Component/SolarE/SolarE';
import MultiMedia from './Component/MultiMidiaPage/MultiMedia';
import Footer from './Component/FooterPage/Footer';
import Trial from './Component/Trial/Trial';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home}/>
            <Route path="/news-event" Component={NewsEvent} />
            <Route path="/heliophysics" Component={HelioPhysics} />
            <Route path="/parker-probe" Component={ParkerProbe} />
            <Route path="/solar-flares" Component={SolarF} />
            <Route path="/solar-eclips" Component={SolarE} />
            <Route path="/multi-media" Component={MultiMedia} />
            <Route path="/try" Component={Trial} />
           
            <Route path="contact" />
            <Route path="*" />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
