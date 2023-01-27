import { Logo, NavbarStyled, ButtonCart } from '@/styles/pages/Navbar'
import CartShop from './CartShop'
import { useState } from 'react'
import Image from 'next/image'

import Button from '@mui/material/Button'

export default function Navbar() {
    const [cart, setCart] = useState(0)
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
                    <span>{cart}</span>
                </Button>
            </ButtonCart>
            <CartShop open={open} handleClose={handleClose} />
        </NavbarStyled>
    )
}
