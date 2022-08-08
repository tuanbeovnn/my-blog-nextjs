import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "styled-components";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import "swiper/scss";
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
