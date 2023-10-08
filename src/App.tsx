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
<<<<<<< HEAD
import Trial from './Component/Trial/Trial';
=======
import Blog from './Component/BlogPG/Blog';
import AddBlog from './Component/BlogPG/AddBlog';
>>>>>>> 501ecb5f0175c9da3136f1e226ae091890a1a719

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
            <Route path="/solar-flares" Component={HelioPhysics} />
            <Route path="/solar-eclips" Component={ParkerProbe} />
            <Route path="/multi-media" Component={MultiMedia} />
<<<<<<< HEAD
            <Route path="/try" Component={Trial} />
=======
            <Route path="/add-blog" Component={AddBlog} />
            

>>>>>>> 501ecb5f0175c9da3136f1e226ae091890a1a719
           
            <Route path="contact" />
            <Route path="*" />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
