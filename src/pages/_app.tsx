import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <CssBaseline />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
