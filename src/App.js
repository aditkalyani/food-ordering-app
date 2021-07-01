import Header from './components/Layout/Header'
import { Fragment, useState } from 'react'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

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
    <Fragment>
      {modalShowing && <Cart onClose={closeModal} />}

      <Header onOpen={openModal} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
