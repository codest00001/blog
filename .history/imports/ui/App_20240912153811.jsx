import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}>

      </Route>
    </Routes>
    </Router>
);
