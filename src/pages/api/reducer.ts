import { createReducer } from '@reduxjs/toolkit'
import { getProducts } from './actions'

export type productState = {
    data: {
        products: {
            id: number
            name: string
            brand: string
            description: string
            photo: string
            price: number
            createdAt: string
            updatedAt: string
        }
        count: number
    }
    pending: boolean
    error: boolean
}

const initialState: productState = {
    data: {
        products: {
            id: 0,
            name: '',
            brand: '',
            description: '',
            photo: '',
            price: 0,
            createdAt: '',
            updatedAt: ''
        },
        count: 0
    },
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
