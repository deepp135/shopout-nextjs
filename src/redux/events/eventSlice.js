import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from '../../utils/axios';

const initialState = {
	event: null,
	eventLoader: true,
	eventStatus: 'idle',
	channelName: null,
};

export const getEventById = createAsyncThunk(
	'event/getEventById',
	async (bookingId, { rejectWithValue }) => {
		try {
			const response = await Axios.post('user/app/home/demoBooking/single', {
				bookingData: { _id: bookingId },
				user: {},
			});
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const eventSlice = createSlice({
	name: 'event',
	initialState,
	reducers: {},
	extraReducers: {
		[getEventById.pending]: (state, payload) => {
			state.eventLoader = true;
		},
		[getEventById.rejected]: (state, { payload }) => {
			state.event = null;
			state.eventLoader = false;
			state.eventStatus = 'rejected';
		},
		[getEventById.fulfilled]: (state, { payload }) => {
			state.event = payload;
			state.channelName = payload.demo.channelName;
			state.eventLoader = false;
			state.eventStatus = 'success';
		},
	},
});

// export const {} = event.actions;

export default eventSlice.reducer;
