import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { updatelightboxIndex, incrementLightboxIndex, decrementLightboxIndex, resetSlideIndices, setLightboxMode} from './mainContentSlice'
import { X, CaretLeft, CaretRight } from 'phosphor-react'

const LightBox = () => {

    const dispatch = useAppDispatch()
    const lightboxMode = useAppSelector(state => state.mains.lightboxMode)
    const lightboxIndex = useAppSelector(state => state.mains.lightboxIndex)
  
  return (
    <div>
        { lightboxMode ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'
        onClick={() => {
          dispatch(resetSlideIndices())
          dispatch(setLightboxMode(!lightboxMode))}}></div> : null }
        <div className={ lightboxMode ? 'fixed top-[50%] left-[50%] w-[45rem] bg-transparent z-10 duration-300 translate-y-[-50%] translate-x-[-50%]' : 
        'fixed top-0 left-[-200%] w-[45rem] bg-transparent z-10 duration-300'}>
          <X size={25} className='right-0 top-[-4rem] cursor-pointer fixed text-orange-100 font-bold hover:text-orange-500' 
          onClick={() => {
            dispatch(setLightboxMode(!lightboxMode))
            dispatch(resetSlideIndices())
            }}/>
          <div className='flex flex-col gap-12 h-full w-full'>
            <div className= 'sm:max-w-[45rem]'>
              <img src={require(`../../images/image-product-${lightboxIndex}.jpg`)} alt='Product' 
              className='rounded-2xl h-full w-full object-cover'/>
              <div className={lightboxMode ? 'flex items-center justify-center fixed top-[37%] left-[-4%] transalte-y-[-50%] bg-orange-100 rounded-full w-16 h-16 font-extrabold' : 'hidden'}
              onClick={() => lightboxIndex > 1 && dispatch(decrementLightboxIndex())}>
                <CaretLeft size={25} className='text-gray-900 font-extrabold cursor-pointer hover:text-orange-500'/>
              </div>
              <div className={lightboxMode ? 'flex items-center justify-center fixed top-[37%] right-[-4%] transalte-y-[-50%] bg-orange-100 rounded-full w-16 h-16 font-extrabold' : 'hidden'}
              onClick={() => lightboxIndex < 4 && dispatch(incrementLightboxIndex())}>
                <CaretRight size={25} className='text-gray-900 font-extrabold cursor-pointer hover:text-orange-500'/>
              </div>
            </div>
            <div className='hidden sm:flex gap-4 justify-between max-w-[45rem] px-12'>
                <div className={lightboxIndex === 1 ? 'border-2 border-orange-500 rounded-2xl' : 'border-2 border-transparent rounded-2xl cursor-pointer hover:opacity-80'}>
                  <img src={require("../../images/image-product-1-thumbnail.jpg")} alt='Product-1'
                  className={lightboxIndex === 1 ? 'w-[7rem] rounded-2xl object-cover opacity-40' :'w-[7rem] rounded-2xl object-cover'}
                  onClick={() => dispatch(updatelightboxIndex(1))}/>
                </div>
                <div className={lightboxIndex === 2 ? 'border-2 border-orange-500 rounded-2xl' : 'border-2 border-transparent rounded-2xl cursor-pointer hover:opacity-80'}>
                  <img src={require("../../images/image-product-2-thumbnail.jpg")} alt='Product-2'
                  className={lightboxIndex === 2 ? 'w-[7rem] rounded-2xl opacity-40' :'w-[7rem] rounded-2xl'}
                  onClick={() => dispatch(updatelightboxIndex(2))}/>
                </div>
                <div className={lightboxIndex === 3 ? 'border-2 border-orange-500 rounded-2xl' : 'border-2 border-transparent rounded-2xl cursor-pointer hover:opacity-80'}>
                  <img src={require("../../images/image-product-3-thumbnail.jpg")} alt='Product-3'
                  className={lightboxIndex === 3 ? 'w-[7rem] rounded-2xl opacity-40' :'w-[7rem] rounded-2xl'}
                  onClick={() => dispatch(updatelightboxIndex(3))}/>
                </div>
                <div className={lightboxIndex === 4 ? 'border-2 border-orange-500 rounded-2xl' : 'border-2 border-transparent rounded-2xl cursor-pointer hover:opacity-80'}>
                  <img src={require("../../images/image-product-4-thumbnail.jpg")} alt='Product-4'
                  className={lightboxIndex === 4 ? 'w-[7rem] rounded-2xl opacity-40' :'w-[7rem] rounded-2xl'}
                  onClick={() => dispatch(updatelightboxIndex(4))}/>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LightBox
