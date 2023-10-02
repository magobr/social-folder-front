import type { AppProps } from 'next/app'

import '../css/globals.css'
import '../css/app.css'
import '../css/alert.css'
import '../css/button.css'
import '../css/input.css'
import '../css/buttonLoginSocial.css'
import '../css/login.css'
import '../css/user/menu.css'

import 'animate.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}