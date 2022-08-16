
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Trash } from 'phosphor-react'
import { removeItem } from './cartSlice'
import { updateTotalCartQty } from '../main/mainContentSlice'


const Cart = () => {
  const cart = useAppSelector(state => state.cart)
  const orders = Array.from(Object.keys(cart))
  const dispatch = useAppDispatch()
  const totalCartQty = useAppSelector(state => state.mains.totalCartQty)

  return (
    <div className='absolute min-h-[30rem] sm:min-h-[20rem] flex flex-col gap-8 w-[33rem] sm:w-[27rem] items-center shadow-xl rounded-b-2xl pb-6 top-[180%] sm:top-[90%] right-[50%] sm:right-0 translate-x-[50%] sm:translate-x-[0%] z-20 bg-white'>
      <div className='border-b-2 border-gray-100 items-center w-full'>
        <h3 className='flex text-left font-bold text-2xl text-gray-600 h-20 items-center px-4'>Cart</h3>
      </div>
      
      {totalCartQty && orders.length ?
      <ul className='flex flex-col gap-4 w-full px-4'>
        {
        orders.map(item => (
          <li key={item} className='w-full'>
            <div className='flex items-center text-left justify-between text-gray-500 font-bold'>
              <img src={cart[item].imgSrc} alt='Product-thumbnail' 
              className='w-[4rem] rounded-[.4rem]'/>
              <div className='text-[1.2rem] '>
                <p>{item}</p>
                <p>{cart[item].markedPrice} X {cart[item].qtyOrdered} = <span className='font-extrabold'> ${Number(cart[item].markedPrice?.slice(1))*cart[item].qtyOrdered}.00</span></p>
              </div>
              <Trash size={20} className='cursor-pointer'
              onClick={() => {
                dispatch(removeItem(item))
                dispatch(updateTotalCartQty(-cart[item].qtyOrdered))

                }}/>
            </div>
            
          </li>
        ))
      }    
      </ul> : <p className='text-gray-500 text-xl font-bold mt-[8rem] sm:mt-[4rem]'>Your cart is empty.</p>}
      {totalCartQty && orders.length ? <div className='px-4 w-full mt-auto'>
        <button className='flex items-center text-gray-50 bg-orange-500 font-bold border-none text-2xl w-full px-6 py-6 sm:py-4 h-16 justify-center cursor-pointer hover:bg-orange-400'>Checkout</button>
        </div> : null}
    </div>
  )
}

export default Cart
