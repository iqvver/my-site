import Header from './Components/Header/Header';
import Promo from './Components/Promo/Promo';
import './css/index.min.css';

function App() {
  return (
    <div className='app'>
      <div className='app-container'>
        <Header />
        <Promo />
      </div>
    </div>
  );
}

export default App;
