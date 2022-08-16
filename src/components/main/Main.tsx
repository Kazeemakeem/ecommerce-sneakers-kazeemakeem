
import Slides from './Slides'
import ProductDetails from './ProductDetails'
import LightBox from './LightBox'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { openCart } from '../navbar/navbarSlice'


const Main = () => {

  const dispatch = useAppDispatch()

  return (
    <div className='max-w-[105rem] mx-auto px-8 py-24 grid justify-center sm:grid-cols-2'
    onClick={() => dispatch(openCart(false))}>
      <Slides />
      <ProductDetails />
      <LightBox />
    </div>
  )
}

export default Main
