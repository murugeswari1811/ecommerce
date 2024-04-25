import { configureStore } from '@reduxjs/toolkit'
import ecommerceSlice from './slice'

export default configureStore({
  reducer: {
    ecommerce: ecommerceSlice,
  },
})