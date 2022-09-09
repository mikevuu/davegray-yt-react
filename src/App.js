import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {useState, useEffect, useRef} from 'react';


function App() {

  return (
    <div className="App">
      <Header/>
      <Content/>

    </div>
  );
}

export default App;
