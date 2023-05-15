//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Item from './Component/Item';




function App() {
  return (
    <div className="App">
      <Header />
        <body>여기가 바디</body>
        <Item />
      <Footer />
    </div>
  );
}

export default App;
