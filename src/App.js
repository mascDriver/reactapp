import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './App.css';
import Contato from './Components/Contato';
import Produtos from './Components/Produtos';
import Produto from './Components/Produto';

const App = () => {
  return (
    <div>
      {' '}
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
