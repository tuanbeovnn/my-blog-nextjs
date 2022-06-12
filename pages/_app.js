import '../styles/globals.scss';
import { theme } from "./../utils/constants";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../styles/GlobalStyles';
import { ToastContainer, toast } from 'react-toastify';
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ToastContainer />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
