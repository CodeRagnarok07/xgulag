import Head from 'next/head'
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Index({ children }) {
    return (
        <>
            <Head>
                <title>XGULAG</title>
                <meta name="description" content="cofundador y CEO de LoickTeam de proyectos: Onliners, Kingcord y Turing-AI. 
            fanático de la tecnología y las startups,
            interesado liderar equipos de trabajo, el growth marketing y la creación de contenido." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
                <meta property="og:image" content="/favicon.png" />
                <meta property="og:url" content="https://xgulag.net/" />
            </Head>

            <Navbar />

            <main>

                {children}
            </main>

           <Footer/>

        </>
    )
}
