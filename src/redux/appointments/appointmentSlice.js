import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from '../../utils/axios';

export const verifyAppointment = createAsyncThunk(
	'appointment/verifyAppointment',
	async (values, { rejectWithValue }) => {
		try {
			console.log(values);
			const response = await Axios.post('/external/invite/verifyAppointment', values);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const initialState = {};

const appointmentSlice = createSlice({
	name: 'appointment',
	initialState,
	reducers: {},
});

// export const {} = appointmentSlice.actions;

export default appointmentSlice.reducer;
