import React, {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { ShoppingCart, List, Trash, X, Package, Info, Phone, GenderMale, GenderFemale } from 'phosphor-react'
import Cart from '../cart/Cart'
import { openCart } from './navbarSlice'


const Navbar = () => {
  const dispatch = useAppDispatch()
  const cartOpen = useAppSelector(state => state.navbar.cartOpen)
  const cart = useAppSelector(state => state.cart)
  const orders = Array.from(Object.keys(cart))
  
  const totalCartQty = useAppSelector(state => state.mains.totalCartQty)
  const [showNav, setShowNav] = useState(false)
  return (
      <div className='max-w-[120rem] mx-auto px-6 py-12 flex justify-between items-center border-b-2 border-gray-100 relative'>
        <div className='flex gap-12 items-center'>
            <List size={32} 
            className='sm:hidden flex justify-center items-center pt-3 mr-[-2rem] cursor-pointer' 
            onClick={() => setShowNav(!showNav)}/>
            <h1 className='text-gray-800 font-[700] text-5xl tracking-tighter'>sneakers</h1>
            <ul className='hidden sm:flex gap-8 font-bold text-gray-400 text-xl pt-3 h-full'>
                <li className='cursor-pointer'><a className='hover:text-gray-600 active:text-gray-600 active:border-b-2 border-orange-500'>Collections</a></li>
                <li className='cursor-pointer'><a className='hover:text-gray-600 active:text-gray-600 active:border-b-2 border-orange-500'>Men</a></li>
                <li className='cursor-pointer'><a className='hover:text-gray-600 active:text-gray-600 active:border-b-2 border-orange-500'>Women</a></li>
                <li className='cursor-pointer'><a className='hover:text-gray-600 active:text-gray-600 active:border-b-2 border-orange-500'>About</a></li>
                <li className='cursor-pointer'><a className='hover:text-gray-600 active:text-gray-600 active:border-b-2 border-orange-500'>Contact</a></li>
            </ul>
        </div>
        <div className='flex gap-10 items-center'>
          <div className='relative'>
            <ShoppingCart size={25} className='text-gray-400 inline-block align-center cursor-pointer'
            onClick={() => dispatch(openCart(!cartOpen))}/>
            {totalCartQty && orders.length ? <span className='absolute left-[1.1rem] top-[-1rem] w-8 h-[1.4rem] bg-orange-500 text-orange-100 rounded-[0.5rem] font-bold text-center text-[1.1rem]'>{totalCartQty}</span> : null}
          </div>
            
            <img src={require("../../images/image-avatar.png")}
            className='h-[4rem] cursor-pointer hover:scale-150' alt='User-Avatar.png'/>
        </div>

        { cartOpen ? <Cart /> : null}

        {/* Mobile Menu */}
        {/* overlay */}

        { showNav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'
        onClick={() => setShowNav(!showNav)}></div> : ''}

        {/* side drawer menu */}      
        <div className={`fixed  w-[20rem] h-screen bg-white z-10 duration-300 ${showNav ? 'top-0 left-0' : 'top-0 left-[-100%]'}`}>
          <X onClick={() => setShowNav(!showNav)} size={25} className='absolute right-4 top-4 cursor-pointer' />
          <h2 className='text-left ml-12 text-2xl mt-2 p-4 font-extrabold '>Menu</h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-400 font-bold'>
              <li className='text-xl py-4 flex'><Package size={20} className='mr-4 cursor-pointer'/><a className='cursor-pointer hover:text-gray-600 active:border-b-2 border-orange-500'>Collections</a></li>
              <li className='text-xl py-4 flex'><GenderMale size={20} className='mr-4 cursor-pointer'/><a className='cursor-pointer hover:text-gray-600 active:border-b-2 border-orange-500'>Men</a></li>
              <li className='text-xl py-4 flex'><GenderFemale size={20} className='mr-4 cursor-pointer'/><a className='cursor-pointer hover:text-gray-600 active:border-b-2 border-orange-500'>Women</a></li>
              <li className='text-xl py-4 flex'><Info size={20} className='mr-4 cursor-pointer'/><a className='cursor-pointer hover:text-gray-600 active:border-b-2 border-orange-500'>About</a></li>
              <li className='text-xl py-4 flex'><Phone size={20} className='mr-4 cursor-pointer'/><a className='cursor-pointer hover:text-gray-600 active:border-b-2 border-orange-500'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default Navbar
