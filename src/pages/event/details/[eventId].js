import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import Axios from '../../../utils/axios';
import { getEventById } from '../../../redux/events/eventSlice';
import { REACT_APP_TWO_FACTOR_KEY } from '../../../configs/app.config';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { authenticateUser } from '../../../redux/user/userSlice';

function EventDetailPage() {
	const router = useRouter();
	const { query, isReady } = useRouter();
	const { eventId } = query;

	const dispatch = useAppDispatch();

	const event = useAppSelector((state) => state.event.event);
	const eventLoader = useAppSelector((state) => state.event.eventLoader);
	const eventStatus = useAppSelector((state) => state.event.eventStatus);
	const channelName = useAppSelector((state) => state.event.channelName);

	const [verifyOtpOpen, setVerifyOtpOpen] = useState(false);
	const [otp, setOtp] = useState(null);
	const [otpDetails, setOtpDetails] = useState(null);

	const otpFormik = useFormik({
		initialValues: {
			name: '',
			phoneNumber: '',
		},
		onSubmit: async (values) => {
			try {
				const otpres = await Axios.get(
					`https://2factor.in/API/V1/${REACT_APP_TWO_FACTOR_KEY}/SMS/+91${values.phoneNumber}/AUTOGEN`
				);
				if (otpres.status === 200) {
					setOtpDetails(otpres.data.Details);
					setVerifyOtpOpen(true);
					toast.success('OTP successfully sent!');
				}
			} catch (error) {
				toast.error('Something went wrong while sending OTP!');
			}
		},
	});

	const { getFieldProps, handleSubmit, values } = otpFormik;

	useEffect(() => {
		if (eventStatus === 'idle' && isReady) {
			dispatch(getEventById(eventId));
		}
	}, [isReady]);

	if (!isReady) {
		return 'Loading...';
	}

	const resendOtp = async () => {
		try {
			const otpres = await Axios.get(
				`https://2factor.in/API/V1/${REACT_APP_TWO_FACTOR_KEY}/SMS/+91${values.phoneNumber}/AUTOGEN`
			);

			if (otpres.status === 200) {
				setOtpDetails(otpres.data.Details);
				toast.success('OTP resent successfully!');
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	const verifyOtp = async () => {
		try {
			const otpres = await Axios.get(
				`https://2factor.in/API/V1/${REACT_APP_TWO_FACTOR_KEY}/SMS/VERIFY/${otpDetails}/${otp}`
			);

			if (otpres.status !== 200) {
				throw new Error('Invalid OTP');
			}

			await dispatch(
				authenticateUser({
					userData: {
						phone: values.phoneNumber,
						firstName: values.name,
					},
					otp: otp,
					otpDetail: otpDetails,
				})
			).unwrap();

			router.push(`/meetings?channel=${channelName}`);
		} catch (error) {
			console.log(error);
			toast.error('Invalid OTP');
		}
	};

	if (eventLoader) {
		return 'Loading...';
	}

	return (
		<>
			<div>
				<pre>{JSON.stringify(event, null, 4)}</pre>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					Name:<input {...getFieldProps('name')}></input>
					<br></br>
					Phone Number:<input {...getFieldProps('phoneNumber')}></input>
					<button type="submit">SEND OTP</button>
				</form>
				<button onClick={resendOtp}> resend otp </button>
			</div>
			{verifyOtpOpen && (
				<div>
					<input onChange={(e) => setOtp(e.target.value)}></input>
					<button onClick={verifyOtp}>verify Otp</button>
				</div>
			)}
		</>
	);
}

export default EventDetailPage;
