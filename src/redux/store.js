import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import userReducer from './user/userSlice';
import eventReducer from './events/eventSlice';
import appointmentSlice from './appointments/appointmentSlice';

export function makeStore() {
	return configureStore({
		reducer: {
			counter: counterReducer,
			user: userReducer,
			event: eventReducer,
			appointment: appointmentSlice,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					// Ignore these action types
					ignoredActions: ['user/setUser'],
				},
			}),
	});
}

const store = makeStore();

export default store;
