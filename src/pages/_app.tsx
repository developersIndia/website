import type { AppProps } from 'next/app'
import React from 'react'

// eslint-disable-next-line require-jsdoc
function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
