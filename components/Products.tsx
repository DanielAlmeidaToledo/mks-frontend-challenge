import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../src/pages/api/hooks'
import { productsSelector } from '../src/pages/api/selectors'
import { getProducts } from '../src/pages/api/actions'
import { ProductsStyled, ItemStyled } from '@/styles/pages/Products'
import { FiShoppingBag } from 'react-icons/fi'

export default function Products() {
    const dispatch = useAppDispatch()
    const { data, pending, error } = useAppSelector(productsSelector)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <ProductsStyled>
            {pending && <p>Loading...</p>}

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
                            <button>
                                <FiShoppingBag size={20} color="#fff" />
                                COMPRAR
                            </button>
                        </ItemStyled>
                    )
                })}

            {error && <p>Oops, something went wrong</p>}

            {/* <button onClick={() => dispatch(getProducts())} disabled={pending}>
                Generate
            </button> */}
        </ProductsStyled>
    )
}
