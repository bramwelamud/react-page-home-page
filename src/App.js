import React from 'react';
import {Blog, Footers, Header, Possibility, WhatGTP33, Features} from './containers/index';
import { Article, Brand, Cta, Featues, Navbar} from './components/export';
import './App.css';

function App() {
  return (
    <div className='app'>
     <div className='gradient__bg'>
      <Navbar />
      <Header />
     </div>
     <Brand/>
     <Features/>
     <Possibility/>
     <WhatGTP33/>
    </div>
  )
}

export default App
