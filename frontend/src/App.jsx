import './App.css'
import { CartContextProvider } from './CartContext';
import Header from './components/Header';
import Home from './components/Home';

function App() {


  return (
    <>

      <CartContextProvider>
        <Header />
        <Home />
      </CartContextProvider>
    </>
  )
}

export default App
