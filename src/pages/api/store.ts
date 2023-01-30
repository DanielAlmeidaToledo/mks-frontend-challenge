import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { productsReducer } from './reducer'
import cartReducer, { getTotals } from './cartSlice'

export const store = configureStore({
    reducer: {
        data: productsReducer,
        cart: cartReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
