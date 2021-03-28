import '../styles/globals.css'
import { UserProvider } from './Store/context'

function MyApp({ Component, pageProps }) {
  const user = { data: 'Lorem Ipsum dummy data coming from store' }
  return <>
    <UserProvider value={user}>
      <Component {...pageProps} />
    </UserProvider>
  </>
}

export default MyApp
