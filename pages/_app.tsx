import SSRProvider from 'react-bootstrap/SSRProvider';
import 'MKL/styles/index.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <SSRProvider><Component {...pageProps} /></SSRProvider>
}