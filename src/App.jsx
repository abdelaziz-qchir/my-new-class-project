import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/header.jsx'
import Acceuil from './components/acceuil.jsx'
import Contact from './components/contact.jsx'
import Service from './components/service.jsx'
import Login from './components/login.jsx'
import Detail from './components/detail.jsx'
import DropCart from './components/DropCart.jsx'
import DropFav from './components/DropFav.jsx'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [sliderCart, setSliderCart] = useState(false)

  const [favoriteItems, setFavoriteItems] = useState([])
  const [favoriteSlider, setFavoriteSlider] = useState(false)

  function addToCart(item) {
    setCartItems([...cartItems, { ...item, "quantite": 1 }])
    console.log(cartItems)
  }

  function vueSlideCart() {
    setSliderCart(!sliderCart)
  }


  function addToFavorite(item) {
    setFavoriteItems(prevItems => {
      const alreadyExists = prevItems.some(
        favorite => favorite.id === item.id
      );

      if (alreadyExists) {
        return prevItems;
      }

      return [...prevItems, { ...item, quantite: 1 }];
    });
  }

  function vueFavoriteSlider() {
    setFavoriteSlider(!favoriteSlider)
  }

  return (
    <>
      <BrowserRouter>
        <Header cart={cartItems} fav={favoriteItems} slideCart={vueSlideCart} favSlider={vueFavoriteSlider} />
        <Routes>
          <Route path="/" element={<Navigate to="/acceuil" />} />
          <Route path='/acceuil' element={<Acceuil addToCart={addToCart} addToFavorite={addToFavorite} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
          <Route path='/login' element={<Login />} />
          <Route path='/detail/:id' element={<Detail />} />
          {/* <Route path='/cart' element={<Cart cartItems={cartItems} />}/> */}
        </Routes>
        {sliderCart ? <DropCart cartItems={cartItems} /> : null}
        {favoriteSlider ? <DropFav favoriteItems={favoriteItems} /> : null}
      </BrowserRouter>
    </>
  )
}

export default App;