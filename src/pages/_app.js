import Head from 'next/head';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import store from '../redux/store';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
			</Head>
			<Provider store={store}>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					theme="dark"
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<Component {...pageProps} />
			</Provider>
		</>
	);
}
