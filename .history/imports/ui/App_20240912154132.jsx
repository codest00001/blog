import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home.jsx'

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </Router>
);

