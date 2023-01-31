import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../src/pages/api/hooks'
import { productsSelector } from '../src/pages/api/selectors'
import { getProducts } from '../src/pages/api/actions'
import { ProductsStyled, ItemStyled } from '@/styles/pages/Products'
import { FiShoppingBag } from 'react-icons/fi'
import { addToCart } from '@/pages/api/cartSlice'
import { useDispatch } from 'react-redux'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export interface ItemProps {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: number
    cartQuantity: number
}

interface ProductsProps {
    handleClickOpen: () => void
}

export default function Products({ handleClickOpen }: ProductsProps) {
    const history = useDispatch()
    const dispatch = useAppDispatch()
    const { data, pending, error } = useAppSelector(productsSelector)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const handleAddToCart = (product: ItemProps) => {
        dispatch(addToCart(product))
    }

    const handleButton = (item: ItemProps) => {
        handleAddToCart(item)
        handleClickOpen()
    }

    function handleSkeleton() {
        return (
            <Stack spacing={5}>
                <Skeleton variant="rounded" width={250} height={320} />
            </Stack>
        )
    }

    return (
        <ProductsStyled>
            {pending && handleSkeleton()}

            {data &&
                data.products instanceof Array &&
                data.products.map((item: any) => {
                    return (
                        <ItemStyled key={item.id}>
                            <img
                                className=""
                                src={item.photo}
                                alt={`Imagem do produto: ${item.name}`}
                            />
                            <div>
                                <h3>{item.name}</h3>
                                <span>R${item.price / 1}</span>
                            </div>
                            <p>{item.description}</p>
                            <button onClick={() => handleButton(item)}>
                                <FiShoppingBag size={20} color="#fff" />
                                COMPRAR
                            </button>
                        </ItemStyled>
                    )
                })}

            {error && <p>Oops, something went wrong</p>}
        </ProductsStyled>
    )
}
