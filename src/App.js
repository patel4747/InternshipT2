import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';  
import Home from './component/Home';      
import Shop from './component/Shop';      
import Contact from './component/Contact';  

function App() {
  return (
    <Router>
      <div>
        <Navbar title="MyFurniture" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:productId" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
