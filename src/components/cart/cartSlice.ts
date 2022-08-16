import { createSlice } from '@reduxjs/toolkit'

 export type Doc = {
    markedPrice: string | null;
    qtyOrdered: number;
    imgSrc: string;
}

type InitStateType = Record<string, Doc>
 
const initialState: InitStateType = {}

 
 const cartSlice = createSlice({
     name: 'cart',
     initialState,
    reducers: {
        addItem: (state, action) => {
            state[action.payload.key] = action.payload.data
        },
        removeItem: (state, action) => {
            delete state[action.payload]
        }
    },
    })

 export default cartSlice.reducer
 export const { addItem, removeItem } = cartSlice.actions