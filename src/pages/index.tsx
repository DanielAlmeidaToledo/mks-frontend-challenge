import Head from 'next/head'
import Navbar from 'components/Navbar'

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
            </main>
        </>
    )
}
