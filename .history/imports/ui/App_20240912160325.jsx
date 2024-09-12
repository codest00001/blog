import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home.jsx'
import NotFound from './NotFound.jsx'
import Nav from './Nav.jsx'
import PostList from './PostList.jsx'
import PostInsert from './PostInsert.jsx'

export const App = () => {
  <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>    
      <Route path="/postList" element={<PostList/>}></Route>
      <Route path="/postInsert" element={<PostInsert/>}></Route>            
    </Routes>
    </Router>
};

