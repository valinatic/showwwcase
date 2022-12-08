import '../styles/globals.css'
import MetaTags from '~/components/core/MetaTags'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MetaTags/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
