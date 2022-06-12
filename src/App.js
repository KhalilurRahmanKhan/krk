import React from 'react';

import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Blog from './Pages/Blog';
import Front from './Pages/Front';
import Detailes from './Pages/Detailes';

const App = () => {

  return (
    <div>
    
     <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/detailes/:id" element={<Detailes />} />
      </Routes>
    
     
    
    </div>
  );
};

export default App;
