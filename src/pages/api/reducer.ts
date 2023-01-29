import { createReducer } from '@reduxjs/toolkit'
import { getProducts } from './actions'

export type productState = {
    data: any
    pending: boolean
    error: boolean
}

const initialState: productState = {
    data: {},
    pending: false,
    error: false
}

export const productsReducer = createReducer(initialState, builder => {
    builder
        .addCase(getProducts.pending, state => {
            state.pending = true
        })
        .addCase(getProducts.fulfilled, (state, { payload }) => {
            state.pending = false
            state.data = payload
        })
        .addCase(getProducts.rejected, state => {
            state.pending = false
            state.error = true
        })
})

export default productsReducer
