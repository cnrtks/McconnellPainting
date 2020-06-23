import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/paletteBen.css';
// components
import Navigation from './components/Navigation';
import Title from './components/Title';
import TopCarousel from './components/TopCarousel';
import Services from './components/Services';
import GettingStarted from './components/GettingStarted';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Title />
      <TopCarousel />
      <hr className="my-4" />
      <Services />
      <hr className="my-4" />
      <GettingStarted />
      <hr className="my-4" />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;