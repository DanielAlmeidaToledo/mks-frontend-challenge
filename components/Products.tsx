import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../src/pages/api/hooks'
import { productsSelector } from '../src/pages/api/selectors'
import { getProducts } from '../src/pages/api/actions'
import { PageProducts } from '@/styles/pages/Products'

const kanye: React.FC = () => {
    const dispatch = useAppDispatch()
    const { data, pending, error } = useAppSelector(productsSelector)

    useEffect(() => {}, [])

    return (
        <PageProducts>
            <h2>Produtos</h2>

            {pending && <p>Loading...</p>}

            {/* {data &&
                data.map((product: any) => {
                    return (
                        <div key={product.id}>
                            <h3>{product.title}</h3>
                            <p>{product.body}</p>
                        </div>
                    )
                })} */}

            {data && console.log(data.products)}

            {error && <p>Oops, something went wrong</p>}

            <button onClick={() => dispatch(getProducts())} disabled={pending}>
                Generate
            </button>
        </PageProducts>
    )
}

export default kanye
