
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartOpen: false,
}

const navbarSlice = createSlice({
     name: 'navbar',
     initialState,
    reducers: {
        openCart: (state, action) => {
            state.cartOpen = action.payload
        }
    },
    })

 export default navbarSlice.reducer
 export const { openCart } = navbarSlice.actions