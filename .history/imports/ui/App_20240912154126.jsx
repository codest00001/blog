import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home.jsx'

//jsx를 사용할 때는 jsx라고 다 적어야함. js

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </Router>
);

