import React from 'react';

import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Blog from './Pages/Blog';
import Front from './Pages/Front';

const App = () => {

  return (
    <div>
    
     <Routes>
        <Route path="/" element={<Front />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    
     
    
    </div>
  );
};

export default App;
