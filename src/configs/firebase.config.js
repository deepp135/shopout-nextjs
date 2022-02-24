import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCMpLIlvZ-sZVGgayPk92a2DEas81rDuIs',
	authDomain: 'shopout.firebaseapp.com',
	databaseURL: 'https://shopout.firebaseio.com',
	projectId: 'shopout',
	storageBucket: 'shopout.appspot.com',
	messagingSenderId: '1017830046598',
	appId: '1:1017830046598:web:e03a31074891dca7a14a07',
	measurementId: 'G-7R4LGXYZTT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
