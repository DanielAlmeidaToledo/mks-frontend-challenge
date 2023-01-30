import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ItemProps } from 'components/Products'

const initialState = {
    items: <ItemProps[]>[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ItemProps>) {
            const existingIndex = state.items.findIndex(
                (item: ItemProps) => item.id === action.payload.id
            )

            if (existingIndex >= 0) {
                state.items[existingIndex] = {
                    ...state.items[existingIndex],
                    cartQuantity: state.items[existingIndex].cartQuantity + 1
                }
            } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 }
                state.items.push(tempProductItem)
            }
            localStorage.setItem('items', JSON.stringify(state.items))
        },
        decreaseCart(state, action: PayloadAction<ItemProps>) {
            const itemIndex = state.items.findIndex(
                (item: ItemProps) => item.id === action.payload.id
            )

            if (state.items[itemIndex].cartQuantity > 1) {
                state.items[itemIndex].cartQuantity -= 1
            } else if (state.items[itemIndex].cartQuantity === 1) {
                const nextitems = state.items.filter(
                    (item: ItemProps) => item.id !== action.payload.id
                )

                state.items = nextitems
            }

            localStorage.setItem('items', JSON.stringify(state.items))
        },
        removeFromCart(state, action: PayloadAction<ItemProps>) {
            state.items.map((cartItem: ItemProps) => {
                if (cartItem.id === action.payload.id) {
                    const nextitems = state.items.filter(
                        (item: ItemProps) => item.id !== cartItem.id
                    )

                    state.items = nextitems
                }
                localStorage.setItem('items', JSON.stringify(state.items))
                return state
            })
        },
        getTotals(state) {
            let { total, quantity } = state.items.reduce(
                (cartTotal: any, cartItem: any) => {
                    const { price, cartQuantity } = cartItem
                    const itemTotal = price * cartQuantity

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal
                },
                {
                    total: 0,
                    quantity: 0
                }
            )
            total = parseFloat(total.toFixed(2))
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        },
        clearCart(state) {
            state.items = []
            localStorage.setItem('items', JSON.stringify(state.items))
        }
    }
})

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
    cartSlice.actions

export default cartSlice.reducer
