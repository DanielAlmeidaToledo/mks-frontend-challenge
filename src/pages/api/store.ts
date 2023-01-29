import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { productsReducer } from './reducer'

export const store = configureStore({
    reducer: {
        data: productsReducer
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