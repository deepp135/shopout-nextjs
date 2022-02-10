import axios from 'axios';
import { BASE_URL } from '../configs/app.config';

const Axios = axios.create({ baseURL: BASE_URL });

export default Axios;
