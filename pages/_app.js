import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "styled-components";
import wrapper from "../redux/configureStore";
import '../styles/globals.scss';
import { GlobalStyles } from '../styles/GlobalStyles';
import { theme } from "./../utils/constants";
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ToastContainer />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default wrapper.withRedux(MyApp);
