import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  isVisible: boolean
}

const initialState: CheckoutState = {
  isVisible: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openCheckout: (state) => {
      state.isVisible = true
    },
    closeCheckout: (state) => {
      state.isVisible = false
    }
  }
})

export const { openCheckout, closeCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
