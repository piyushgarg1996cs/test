import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='About' element={<About />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
