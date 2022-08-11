import React from 'react'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import  documentsReducer  from '../features/documents/documentsSlice'
// import  markdownReducer from '../features/markdown/markdownSlice'
// import  markupReducer from '../features/markup/markupSlice'
// import  themeReducer from '../features/theme/themeSlice'
// import  headerReducer from '../features/header/headerSlice'
// import { loadState } from '../localStorage'
import mainsReducer from '../components/main/mainContentSlice'
import cartReducer from '../components/cart/cartSlice'
import navbarReducer from '../components/navbar/navbarSlice'



const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const store = configureStore({
    devTools: true,
    reducer: {
        mains: mainsReducer,
        cart: cartReducer,
        navbar: navbarReducer,
    },

    // preloadedState: loadState(),

    middleware: (getDefaultMiddleware) => getDefaultMiddleware()

})

export default store
export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch