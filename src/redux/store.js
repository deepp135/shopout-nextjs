import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import userReducer from './user/userSlice';
import eventReducer from './events/eventSlice';

export function makeStore() {
	return configureStore({
		reducer: { counter: counterReducer, user: userReducer, event: eventReducer },
	});
}

const store = makeStore();

export default store;
