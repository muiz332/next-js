import '../styles/globals.css'
import Layout from '../component/main-layout/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <title>Belajar next js</title>
    <meta name='description' content='belajar next js untuk pemula' />
    <link rel="icon" href="/favico.ico" />

  </Head>
  {
    (Component.name === "NotFound") ? <Component {...pageProps} /> : <Layout><Component {...pageProps} /></Layout>
  }
  </>
}

export default MyApp
