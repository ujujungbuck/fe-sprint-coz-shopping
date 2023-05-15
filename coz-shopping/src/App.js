//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
//import Item from './Components/Item';
import Main from './Pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import Bookmark from './Pages/Bookmark';



function App({datas}) {
  return (
    <div className="App">
      <Header />
        <body>
            <Routes>
            <Route path="/" element={<Main datas={datas} />}/>
            <Route path="/products/list" element={<ProductList datas={datas} />}/>
            <Route path="/bookmark" element={<Bookmark datas={datas} />}/>
          </Routes>
          </body>
      <Footer />
    </div>
  );
}

export default App;
