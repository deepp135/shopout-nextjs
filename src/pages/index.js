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
import AddUser from '../components/AddUser';
import { setCurrentUser } from '../redux/user/userSlice';
import { useAppSelector } from '../hooks/hooks';


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
	const [userDetails, setUserDetails] = useState({ name: '', phone: '' });

	const dispatch = useAppDispatch();
    const currentUserName = useAppSelector((state) => state.user.currentUserName);

    useEffect(async () => {
		try {
			await dispatch(
				verifyAppointment({ appointmentId: channel, mobileNumber, inviteFrom })
			).unwrap();			
			setLoading(false);

		} catch (error) {
			toast.error(error.message);
			router.push('/appointmentnotfound');
		}
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		//make the user api call here
		dispatch(setCurrentUser(userDetails.name));
		setInCall(true);
	};

	if (loading) {
		return 'Loading...';
	}

	return (
		<>
			<Navbar />
			<div className='content-part'>
				<Advertise />
				{!SSR && inCall && currentUserName? (
					<div className="chat-part">
						<VideoCall
							setInCall={setInCall}
							channelName={channel}
							uid={inviteFrom === 'user' ? 4 : 2}
						>
						</VideoCall>
						<ChatPart channel={channel} uid={inviteFrom === 'user' ? 4 : 2} />
					</div>
				) : (
					<AddUser
						setUserDetails={setUserDetails}
						userDetails={userDetails}
						handleOnSubmit={handleOnSubmit}
					/>
				)}
			</div>
			<Footer />
		</>
	);
}

export default Meeting;
