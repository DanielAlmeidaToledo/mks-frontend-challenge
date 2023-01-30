import Head from 'next/head'
import Navbar from 'components/Navbar'
import Products from 'components/Products'
import Footer from 'components/Footer'
import { useState } from 'react'

export interface CartProps {
    cartShop: {
        id: number
        name: string
        price: number
        photo: string
        count: number
    }[]
    setCartShop: React.Dispatch<React.SetStateAction<any>>
}

export default function Home() {
    return (
        <>
            <Head>
                <title>MKS Sistemas</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar />
                <Products />
                <Footer />
            </main>
        </>
    )
}
