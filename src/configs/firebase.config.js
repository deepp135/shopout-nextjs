import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyD1fgadnwLXLb0ZbrULjBkkRVMcFPneMyE',
	authDomain: 'anand-rathi-frontend.firebaseapp.com',
	projectId: 'anand-rathi-frontend',
	storageBucket: 'anand-rathi-frontend.appspot.com',
	messagingSenderId: '934900849664',
	appId: '1:934900849664:web:9084bf432c40bd00d88ce5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
