import Head from "next/head";
import Header from "@/pages/components/Header";
import Footer from "@/pages/components/Footer";

export function MainLayout({children}) {
    return (<>

        <Head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

            <title>App Next.js</title>

            <meta name="description" content="Next project"></meta>
            <meta name="keywords" content="html, css, javascript< Next, NextJS  "></meta>
            <meta name="author" content="Evgeny Tryzo"></meta>
        </Head>

        <Header/>

        <main>
            {children}
        </main>

        <Footer />

    </>)
}