import { createSlice } from '@reduxjs/toolkit'


export const STATUSES = Object.freeze(
    {
       SUCCESS : 'SUCCESS',
       ERROR : 'ERROR',
       LOADING : 'LOADING'
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.SUCCESS,
    } ,
    reducers : {
        setProducts(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload;
        }
    }
})

export const {setProducts , setStatus} = productSlice.actions;
export default productSlice.reducer;


// middelware

export function fetchProduct() {
      return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR))
        }
      }
}