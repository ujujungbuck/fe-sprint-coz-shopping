//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Item from './Components/Item';




function App() {
  return (
    <div className="App">
      <Header />
        <body>
          <Item/>
          </body>
      <Footer />
    </div>
  );
}

export default App;
