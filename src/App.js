import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect, useRef } from 'react';

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
