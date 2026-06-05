import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Concept from './pages/Concept';
import Viewer3D from './pages/Viewer3D';
import AppShowcase from './pages/AppShowcase';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/viewer" element={<Viewer3D />} />
        <Route path="/showcase" element={<AppShowcase />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;