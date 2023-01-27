import { useState } from 'react'
import {
    ModalCart,
    ButtonClose,
    TitleCart,
    ButtonFinish
} from '@/styles/pages/CartShop'

import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface cartShopProps {
    open: boolean
    handleClose: () => void
}

export default function CartShop({ open, handleClose }: cartShopProps) {
    const [cart, setCart] = useState(0)

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
                    <DialogContentText id="alert-dialog-description">
                        Map Items
                    </DialogContentText>
                </DialogContent>
                <ButtonFinish onClick={handleClose}>
                    Finalizar Compra
                </ButtonFinish>
            </ModalCart>
        </Dialog>
    )
}
