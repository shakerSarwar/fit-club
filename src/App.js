import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Join from './components/Join';
import Plan from './components/Plan';
import Programs from './components/Programs';
import Reasons from './components/Reasons';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <div className="App">
       <Hero />
       <Programs />
       <Reasons />
       <Plan />
       <Testimonials />
       <Join />
       <Footer />
    </div>
  );
}

export default App;
