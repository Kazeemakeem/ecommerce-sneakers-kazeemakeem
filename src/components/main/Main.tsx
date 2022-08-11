import React from 'react'
import Slides from './Slides'
import ProductDetails from './ProductDetails'
import LightBox from './LightBox'
import Cart from '../cart/Cart'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { openCart } from '../navbar/navbarSlice'


const Main = () => {

  const dispatch = useAppDispatch()
  const cartOpen = useAppSelector(state => state.navbar.cartOpen)

  return (
    <div className='max-w-[105rem] mx-auto px-8 py-24 grid justify-center sm:grid-cols-2'
    onClick={() => dispatch(openCart(false))}>
      <Slides />
      <ProductDetails />
      <LightBox />
      {/* <Cart />      */}
    </div>
  )
}

export default Main
