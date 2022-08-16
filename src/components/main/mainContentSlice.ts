
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitStateType = {
    slideIndex: number;
    lightboxIndex: number;
    QtyToOrder: number;
    totalCartQty: number;
    lightboxMode: boolean;
    currProductImg: string;

}
 const initialState: InitStateType = {
     slideIndex: 1,
     lightboxIndex: 1,
     QtyToOrder: 0,
     totalCartQty: 0,
     lightboxMode: false,
     currProductImg: ''
 }

 
 const mainContentSlice = createSlice({
     name: 'mains',
     initialState,
    reducers: {
        updateSlideIndex: (state, action:PayloadAction<number>) => {
            state.slideIndex = action.payload
        },
        updatelightboxIndex: (state, action:PayloadAction<number>) => {
            state.lightboxIndex = action.payload
        },
        
        incrementQtyToOrder: (state) => {
            state.QtyToOrder += 1
        },
        decrementQtyToOrder: (state) => {
            state.QtyToOrder -= 1
        },
        incrementSlideIndex: (state) => {
            state.slideIndex += 1
        },
        decrementSlideIndex: (state) => {
            state.slideIndex -= 1
        },
        incrementLightboxIndex: (state) => {
            state.lightboxIndex += 1
        },
        decrementLightboxIndex: (state) => {
            state.lightboxIndex -= 1
        },
        updateTotalCartQty: (state, action) => {
            state.totalCartQty += action.payload
        },
        resetQtyToOrder: (state) => {
            state.QtyToOrder = 0
        },
        resetSlideIndices: (state) => {
            state.slideIndex = 1
            state.lightboxIndex = 1
        },
        setLightboxMode: (state, action) => {
            state.lightboxMode = action.payload
        },
        updateCurrProductImg: (state, action) => {
            state.currProductImg = action.payload
        }

    },
    })

 export default mainContentSlice.reducer
 export const { updateSlideIndex, updatelightboxIndex, incrementQtyToOrder, 
    decrementQtyToOrder, incrementSlideIndex, decrementSlideIndex, incrementLightboxIndex, decrementLightboxIndex, updateTotalCartQty, resetQtyToOrder, resetSlideIndices, setLightboxMode, updateCurrProductImg } = mainContentSlice.actions