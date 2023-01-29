import { RootState } from './store'
import { createSelector } from '@reduxjs/toolkit'

export const selectQuote = (state: RootState) => state.data

export const productsSelector = createSelector(selectQuote, state => state)
