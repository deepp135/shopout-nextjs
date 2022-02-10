import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from '../redux/store';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
	return (
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
	);
}
