import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Feature from './components/Feature'
import './App.css'
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productDataTwo} from './components/Products/data'
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
    
  );
}

export default App;