import React, { useEffect, useState } from "react";
import { AnimationFooter, AnimationAbout, AnimationPortfolio, AnimationContact, AnimationChevron } from './Utils/Utils'
import Ability from './Components/Ability/Ability';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Promo from './Components/Promo/Promo';
import './css/index.min.css';
import 'animate.css';
import Chevron from "./Components/Widgets/Chevron/Chevron";

function App() {

  useEffect(() => {
    AnimationChevron();
    AnimationAbout();
    AnimationPortfolio();
    AnimationContact();
    AnimationFooter();
  });

  const [switchTheme, setSwitchTheme] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--main-color", switchTheme ? "#DCDCDC" : "#1b2735");
    root?.style.setProperty("--sub-color", switchTheme ? "#1b2735" : "#DCDCDC");
  }, [switchTheme]);

  return (
    <div className='app'>
      <Chevron />
      <Header switchTheme={switchTheme} setSwitchTheme={setSwitchTheme} />
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
