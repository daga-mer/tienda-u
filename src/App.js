//import './App.css';
import { useEffect, useState } from 'react';
import Buscador from './components/buscador';
import NavBarComponent from './components/navBarComponent';

function App() {
  let [cart, setCart] = useState([])


  useEffect(() => {
    if (cart != null && cart.length === 0) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [cart])

  return (
    <div className="App">
      <header className="App-header">
        <NavBarComponent cart={cart} setCart={setCart} />
      </header>
      
      <div className='container'>
        <Buscador cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
