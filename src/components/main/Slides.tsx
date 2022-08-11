import React, {useRef} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { updateSlideIndex, updatelightboxIndex, incrementSlideIndex, decrementSlideIndex, setLightboxMode, updateCurrProductImg} from './mainContentSlice'
import { CaretLeft, CaretRight } from 'phosphor-react'

const Slides = () => {

  const imgRef = useRef<HTMLImageElement>(null)
    
    const lightboxMode = useAppSelector(state => state.mains.lightboxMode)
  const dispatch = useAppDispatch()
  const slideIndex = useAppSelector((state) => state.mains.slideIndex)

  return (
     <div className='flex flex-col gap-12 h-full w-full'>
        <div className='max-w-[35rem] sm:max-w-[45rem] relative'>
          <img ref={imgRef} src={require(`../../images/image-product-${slideIndex}.jpg`)} alt='Product' 
          className='rounded-2xl h-full w-full object-cover'
          onLoad={() => dispatch(updateCurrProductImg(imgRef.current!.getAttribute('src')))} />
              <div className='flex items-center justify-center absolute top-[45%] left-[3%] transalte-y-[-50%] bg-orange-100 rounded-full w-16 h-16 font-extrabold sm:hidden' 
              onClick={() => slideIndex > 1 && dispatch(decrementSlideIndex())}>
                <CaretLeft size={25} className='text-gray-900 font-extrabold cursor-pointer'/>
              </div>
              <div className='flex items-center justify-center absolute top-[45%] right-[3%] transalte-y-[-50%] bg-orange-100 rounded-full w-16 h-16 font-extrabold sm:hidden' 
              onClick={() => slideIndex < 4 && dispatch(incrementSlideIndex())}>
                <CaretRight size={25} className='text-gray-900 font-extrabold cursor-pointer'/>
              </div>
              <div className='flex  gap-5 absolute left-[50%] bottom-[5%] translate-x-[-50%] sm:hidden'>
                <div className={slideIndex === 1 ? 'h-4 w-4 bg-gray-700 rounded-full' : 'h-4 w-4 bg-white rounded-full'}></div>
                <div className={slideIndex === 2 ? 'h-4 w-4 bg-gray-700 rounded-full' : 'h-4 w-4 bg-white rounded-full'}></div>
                <div className={slideIndex === 3 ? 'h-4 w-4 bg-gray-700 rounded-full' : 'h-4 w-4 bg-white rounded-full'}></div>
                <div className={slideIndex === 4 ? 'h-4 w-4 bg-gray-700 rounded-full' : 'h-4 w-4 bg-white rounded-full'}></div>
              </div>
        </div>
        <div className='hidden sm:flex gap-4 justify-between max-w-[45rem]'>
            <div className={slideIndex === 1 ? 'border-2 border-orange-500 rounded-2xl' : 'border-2 border-transparent rounded-2xl cursor-pointer hover:opacity-80'}>
              <img src={require('../../images/image-product-1-thumbnail.jpg')} alt='Product-1'
              className={slideIndex === 1 ? 'w-[7rem] rounded-2xl object-cover opacity-40' :'w-[7rem] rounded-2xl object-cover'}
              onClick={() => dispatch(updateSlideIndex(1))}
              onDoubleClick={() => {
                dispatch(setLightboxMode(!lightboxMode))
                dispatch(updatelightboxIndex(1))
              }}/>
            </div>
            <div className={slideIndex === 2 ? 'border-2 border-orange-500 rounded-2xl' : 'border-2 border-transparent rounded-2xl cursor-pointer hover:opacity-80'}>
              <img src={require("../../images/image-product-2-thumbnail.jpg")} alt='Product-2'
              className={slideIndex === 2 ? 'w-[7rem] rounded-2xl opacity-40' :'w-[7rem] rounded-2xl'}
              onClick={() => dispatch(updateSlideIndex(2))}
              onDoubleClick={() => {
                dispatch(setLightboxMode(!lightboxMode))
                dispatch(updatelightboxIndex(2))
              }}/>
            </div>
            <div className={slideIndex === 3 ? 'border-2 border-orange-500 rounded-2xl' : 'border-2 border-transparent rounded-2xl cursor-pointer hover:opacity-80'}>
              <img src={require("../../images/image-product-3-thumbnail.jpg")} alt='Product-3'
              className={slideIndex === 3 ? 'w-[7rem] rounded-2xl opacity-40' :'w-[7rem] rounded-2xl'}
              onClick={() => dispatch(updateSlideIndex(3))}
              onDoubleClick={() => {
                dispatch(setLightboxMode(!lightboxMode))
                dispatch(updatelightboxIndex(3))
              }}/>
            </div>
            <div className={slideIndex === 4 ? 'border-2 border-orange-500 rounded-2xl' : 'border-2 border-transparent rounded-2xl cursor-pointer hover:opacity-80'}>
              <img src={require("../../images/image-product-4-thumbnail.jpg")} alt='Product-4'
              className={slideIndex === 4 ? 'w-[7rem] rounded-2xl opacity-40' :'w-[7rem] rounded-2xl'}
              onClick={() => dispatch(updateSlideIndex(4))}
              onDoubleClick={() => {
                dispatch(setLightboxMode(!lightboxMode))
                dispatch(updatelightboxIndex(4))
              }}/>
            </div>
        </div>
      </div>
  )
}

export default Slides
