import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const VideoCall = dynamic(() => import('../components/VideoCall'), { ssr: false });
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import ChatPart from '../components/chatpart';
import Advertise from '../components/Advertise';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import { useAppDispatch } from '../hooks/hooks';
import { verifyAppointment } from '../redux/appointments/appointmentSlice';

const SSR = typeof window === 'undefined';

export async function getServerSideProps(context) {
	const channelId = context.query.appointmentId;
	const mobileNumber = context.query.mobileNumber;
	const inviteFrom = context.query.inviteFrom;

	return { props: { channel: channelId, mobileNumber: mobileNumber, inviteFrom } };
}

function Meeting({ channel, mobileNumber, inviteFrom }) {
	const router = useRouter();

	const [inCall, setInCall] = useState(false);
	const [loading, setLoading] = useState(true);

	const dispatch = useAppDispatch();

	useEffect(async () => {
		try {
			await dispatch(
				verifyAppointment({ appointmentId: channel, mobileNumber, inviteFrom })
			).unwrap();
			setLoading(false);
			setInCall(true);
		} catch (error) {
			toast.error(error.message);
			router.push('/appointmentnotfound');
		}
	}, []);

	if (loading) {
		return 'Loading...';
	}

	return (
		<>
			<Navbar />
			<Advertise />
			<div className="chat-part">
				{!SSR && inCall && <VideoCall setInCall={setInCall} channelName={channel} />}
				<ChatPart />
			</div>
			<Footer />
		</>
	);
}

export default Meeting;
