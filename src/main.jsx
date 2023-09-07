import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './routes/ItemDetailContainer.jsx'
import { NavBar } from './components/navbar.jsx'
import { Category } from './routes/Category.jsx'
import CartContextProvider, { CartContext } from './context/cartContext.jsx'
import { CartListContainer } from './routes/CartListContainer.jsx'
import Checkout from './routes/Checkout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route exact path="/category/:id" element={
        <>
        <NavBar/>
        <Category/>
        </>
      } />
      <Route exact path="/item/:id" element={
      <>
      <NavBar/>
      <ItemDetailContainer />
      </>} />
      <Route exact path="/cart" element={
        <>
        <NavBar/>
        <CartListContainer/>
        </>
      }/>
      <Route exact path="/checkout" element={
        <>
        <NavBar/>
        <Checkout/>
        </>
      }/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>,
)
