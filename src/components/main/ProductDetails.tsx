import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { incrementQtyToOrder, decrementQtyToOrder, updateTotalCartQty, resetQtyToOrder } from './mainContentSlice'
import { addItem } from '../cart/cartSlice'
import { Plus, Minus, ShoppingCart } from 'phosphor-react'
import { Doc } from '../cart/cartSlice'



const ProductDetails = () => {

  const qtyOrdered = useAppSelector(state => state.mains.QtyToOrder)

  const itemNameRef = useRef<HTMLHeadingElement>(null)
  const itemPriceRef = useRef<HTMLParagraphElement>(null)
  const currImg = useAppSelector(state => state.mains.currProductImg)
  const imgSrc = currImg && require(`../../images/${currImg.slice(14,30).split('.')[0]}-thumbnail.jpg`)
  // const imgSrc = require('../../images/image-product-1-thumbnail.jpg')

  type addItemPayloadType = {
    key: string | null;
    data: Doc;
}

const itemName = itemNameRef.current && itemNameRef.current.textContent
const itemPrice = itemPriceRef.current && itemPriceRef.current.textContent

const addItemPayload: addItemPayloadType = {
    key: itemName,
    data: {
      markedPrice: itemPrice,
      qtyOrdered: qtyOrdered,
      imgSrc: imgSrc,
    }
}

    


  const dispatch = useAppDispatch()
  const qtyToOrder = useAppSelector((state) => state.mains.QtyToOrder)
  const cart = useAppSelector(state => state.cart)
  const totalCartQty = Object.values(cart).reduce((acc:number, next:Doc): number => {
    acc += next.qtyOrdered
    return acc
  }, 0)

  return (
    <div className=' flex flex-col gap-10 text-left py-24 sm:px-[4rem] sm:py-12 sm:gap-6 md:py-24 w-[35rem] sm:w-full'>
        <h6 className='font-bold text-orange-500 uppercase tracking-[.2rem]'>sneaker company</h6>
        <h1 ref={itemNameRef} className='text-5xl md:text-6xl font-bold text-gray-800'>Fall Limited Edition Sneakers</h1>
        <p className='text-gray-500 text-[1.4rem] md:text-[1.5rem] md:mt-4'>These low-profile sneakers are your perfect casual wear companion. 
          Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className='flex justify-between w-[35rem] sm:flex-col'>
          <div className='flex gap-8'>
          <p ref={itemPriceRef} className='font-bold text-[2rem] md:text-[2.7rem] text-gray-800 tracking-tighter'>$125.00</p>
          <span className='font-bold text-xl md:text-2xl text-orange-500 pt-[0.2rem] h-10 w-16 bg-orange-100 rounded-[.5rem] mt-4 text-center'>50%</span>
          </div>
          <p className='font-bold text-gray-400 text-2xl line-through sm:mt-[.2rem]'>$250.00</p>
        </div>

        <div className='flex flex-col gap-6 sm:gap-3 sm:flex-row  justify-between max-w-[35rem] mt-4'>
          <div className='flex justify-between sm:justify-center gap-10 text-orange-500 bg-gray-100 h-20 sm:h-16 rounded-2xl px-6 py-6 sm:py-4 w-[35rem] sm:w-[15rem]'>
            <Minus size={18} 
            onClick={() => qtyToOrder && dispatch(decrementQtyToOrder())}  className='cursor-pointer'/>
            <p className='text-gray-800 font-bold text-2xl'>{qtyToOrder}</p>
            <Plus size={18} 
            onClick={() => dispatch(incrementQtyToOrder())} className='cursor-pointer'/>
          </div>
            <button className='flex gap-3 text-gray-50 bg-orange-500 font-bold border-none text-2xl w-[35rem] sm:w-[20rem] px-4 py-6 sm:py-4 h-20 sm:h-16 justify-center cursor-pointer hover:bg-orange-400'
            onClick={() => {
              dispatch(addItem(addItemPayload))
              dispatch(updateTotalCartQty(qtyToOrder))
              setTimeout(() => {
                dispatch(resetQtyToOrder())
              }, 500)
              
              }}>
              <ShoppingCart size={18}/><span className='
              w-[10rem]'> Add to Cart</span>
            </button>
        </div>
        
        
      </div>
  )
}

export default ProductDetails
