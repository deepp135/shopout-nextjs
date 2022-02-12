import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const VideoCall = dynamic(() => import('../components/VideoCall'), { ssr: false });
import ChatPart from '../components/chatpart';
import Advertise from '../components/Advertise';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
// import Slider from '../components/slider';

const SSR = typeof window === 'undefined';

export async function getServerSideProps(context) {
	return { props: { channel: context.query.channel } };
}

function Meeting({ channel }) {
	const [inCall, setInCall] = useState(true);
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
