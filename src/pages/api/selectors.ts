import { RootState } from './store'
import { createSelector } from '@reduxjs/toolkit'

export const selectQuote = (state: RootState) => state.products

export const productsSelector = createSelector(selectQuote, state => state)
