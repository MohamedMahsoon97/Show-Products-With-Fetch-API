import { configureStore } from '@reduxjs/toolkit'
import  productsReducer  from './Redux/productSlice'
export const store = configureStore({
      reducer: {
            products : productsReducer,
      },
})