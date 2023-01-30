import { Logo, NavbarStyled, ButtonCart } from '@/styles/pages/Navbar'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Image from 'next/image'
import CartShop from './CartShop'

import Button from '@mui/material/Button'
import { RootState } from '@/pages/api/store'

export default function Navbar() {
    const { cartTotalQuantity } = useSelector((state: RootState) => state.cart)
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <NavbarStyled>
            <Logo>
                <h1>
                    MKS<span>Sistemas</span>
                </h1>
            </Logo>
            <ButtonCart>
                <Button onClick={handleClickOpen}>
                    <Image
                        src="/iconCart.svg"
                        alt="Carrinho de compras"
                        className="imgCart"
                        width="20"
                        height="20"
                    />
                    <span>{cartTotalQuantity}</span>
                </Button>
            </ButtonCart>
            <CartShop open={open} handleClose={handleClose} />
        </NavbarStyled>
    )
}
