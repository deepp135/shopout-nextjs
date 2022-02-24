import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../utils/axios';

const initialState = {
	user: [],
	currentUserName: null,
};

export const authenticateUser = createAsyncThunk(
	'user/authenticateUser',
	async (values, { rejectWithValue }) => {
		try {
			const response = await Axios.post('/user/auth/web/login', values);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, payload) => {
			state.user = [...state.user, payload.payload];
		},
		removeUser: (state, payload) => {
			const newUsers = state.user.filter((User) => User.uid !== payload.payload);
			state.user = [...newUsers];
		},
		setCurrentUser: (state, { payload }) => {
			state.currentUserName = payload;
		},
		setChannelName: (state, { payload }) => {
			state.channelName = payload;
		},
	},
	extraReducers: {
		[authenticateUser.pending]: (state, payload) => {},
		[authenticateUser.rejected]: (state, { payload }) => {
			state.currentUserName = payload;
		},
		[authenticateUser.fulfilled]: (state, { payload }) => {
			state.event = payload.user.firstName;
		},
	},
});

export const { setUser, removeUser ,setCurrentUser} = userSlice.actions;

export default userSlice.reducer;
