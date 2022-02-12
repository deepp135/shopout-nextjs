import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const VideoCall = dynamic(() => import('../components/VideoCall'), { ssr: false });

const SSR = typeof window === 'undefined';

export async function getServerSideProps(context) {
	return { props: { channel: context.query.channel } };
}

function Meeting({ channel }) {
	const [inCall, setInCall] = useState(true);
	return <div>{!SSR && inCall && <VideoCall setInCall={setInCall} channelName={channel} />}</div>;
}

export default Meeting;
