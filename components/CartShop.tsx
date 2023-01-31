import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    ModalCart,
    ButtonClose,
    TitleCart,
    ItemCart,
    ItemsHeight,
    TotalValue,
    ButtonFinish
} from '@/styles/pages/CartShop'
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart
} from '../src/pages/api/cartSlice'

import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { RootState } from '@/pages/api/store'
import { ItemProps } from './Products'

interface cartShopProps {
    open: boolean
    handleClose: () => void
}

export default function CartShop({ open, handleClose }: cartShopProps) {
    const { cartTotalAmount } = useSelector((state: RootState) => state.cart)
    const cart = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])

    const handleAddToCart = (product: ItemProps) => {
        dispatch(addToCart(product))
    }
    const handleDecreaseCart = (product: ItemProps) => {
        dispatch(decreaseCart(product))
    }
    const handleRemoveFromCart = (product: ItemProps) => {
        dispatch(removeFromCart(product))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <ModalCart>
                <DialogActions>
                    <Button onClick={handleClose}>
                        <ButtonClose>X</ButtonClose>
                    </Button>
                </DialogActions>
                <DialogTitle>
                    <TitleCart>Carrinho de compras</TitleCart>
                </DialogTitle>
                <DialogContent>
                    <ItemsHeight>
                        {cart.items.length === 0 ? (
                            <div className="cartEmpty">Carrinho vazio :(</div>
                        ) : (
                            cart.items.map((item: ItemProps) => (
                                <ItemCart key={item.id}>
                                    <img src={item.photo} alt="" />
                                    <h3>{item.name}</h3>
                                    <div>
                                        <button
                                            className="btn-remove"
                                            onClick={() =>
                                                handleDecreaseCart(item)
                                            }
                                        >
                                            -
                                        </button>
                                        <span>{item.cartQuantity}</span>
                                        <button
                                            className="btn-add"
                                            onClick={() =>
                                                handleAddToCart(item)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p>R${item.price * item.cartQuantity}</p>
                                    <button
                                        className="btn-delete"
                                        onClick={() =>
                                            handleRemoveFromCart(item)
                                        }
                                    >
                                        X
                                    </button>
                                </ItemCart>
                            ))
                        )}
                    </ItemsHeight>
                    {cart.items.length > 0 && (
                        <TotalValue>
                            <span>Total:</span>
                            <span>R${cartTotalAmount}</span>
                        </TotalValue>
                    )}
                </DialogContent>
                <ButtonFinish onClick={handleClose}>
                    Finalizar Compra
                </ButtonFinish>
            </ModalCart>
        </Dialog>
    )
}
