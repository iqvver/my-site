import React, { useEffect } from "react";
import { AnimationFooter, AnimationAbout, AnimationPortfolio, AnimationContact } from './Utils/Utils'
import Ability from './Components/Ability/Ability';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Promo from './Components/Promo/Promo';
import './css/index.min.css';
import 'animate.css';

function App() {

  useEffect(() => {
    AnimationFooter();
    AnimationAbout();
    AnimationPortfolio();
    AnimationContact();
  }, []);

  return (
    <div className='app'>
      <Header />
      <Promo />
      <About />
      <Ability />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
