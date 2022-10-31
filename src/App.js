import Ability from './Components/Ability/Ability';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Promo from './Components/Promo/Promo';
import './css/index.min.css';

function App() {
  return (
    <div className='app'>
      <div className='app-container'>
        <Header />
        <Promo />
        <About />
        <Ability />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
