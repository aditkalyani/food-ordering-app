import Header from './components/Layout/Header'
import { Fragment, useState } from 'react'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [modalShowing, setModalShowing] = useState(false)

  // const toggleModalShowing = ()=>{
  //   setModalShowing((prevState)=>{
  //     return !prevState
  //   })
  // }

  const openModal = ()=>{
    setModalShowing(true)
  }

  const closeModal = ()=>{
    setModalShowing(false)
  }

  return (
    <CartProvider>
      {modalShowing && <Cart onClose={closeModal} />}

      <Header onOpen={openModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
