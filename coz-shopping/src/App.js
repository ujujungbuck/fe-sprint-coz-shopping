//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
//import Item from './Components/Item';
import Main from './Pages/Main';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import Bookmark from './Pages/Bookmark';



function App({datas}) {
  return (
    <div className="App">
      <Header style={{zIndex:"1200"}} />
      <div className='body'>
            <Routes>
            <Route style={{zIndex:"0"}} path="/" element={<Main datas={datas} />}/>
            <Route style={{zIndex:"0"}} path="/products/list" element={<ProductList datas={datas} />}/>
            <Route style={{zIndex:"0"}} path="/bookmark" element={<Bookmark datas={datas} />}/>
          </Routes>
          </div>
      <Footer />
    </div>
  );
}

export default App;
