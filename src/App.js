import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Home from './components/pages/Home/Home.js';
import Table from './components/pages/Table.js';
import NotFound from './components/pages/NotFound.js';
import Header from './components/views/Header.js';
import Footer from './components/views/Footer.js';


function App() {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/api/table/:id" element={<Table/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Container>

  );
}

export default App;
