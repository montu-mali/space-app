import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/HeaderFile/Header';
import Home from './Component/HomePage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Video from './Component/Videopage/Video';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home}/>
            <Route path="/video" Component={Video} />
            <Route path="contact" />
            <Route path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
