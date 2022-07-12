import '../styles/globals.css'
import Layout from '../component/main-layout/layout'

function MyApp({ Component, pageProps }) {
  const check = new String(Component.name).split(':')[0]
  if(check === "NotFound"){
    return (
      <Component {...pageProps} />
    )
  }
  return (
    <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp;

/*

nah tinggal kita jadikan component pembungkus silayoutnya untuk membungkus
Component dari file component perhalaman

*/