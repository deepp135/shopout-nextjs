import React, { useState, useEffect } from 'react';
import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import Videos from './Video';
import Controls from './Controls';

import { AGORA_CONFIG, appId, token } from '../configs/agora.config';
import { removeUser, setUser } from '../redux/user/userSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { MAX_PARTICIPANTS } from '../configs/app.config';

const useClient = createClient(AGORA_CONFIG);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

function VideoCall({ setInCall, channelName, uid }) {
	const [start, setStart] = useState(false);
	const router = useRouter();

	const dispatch = useAppDispatch();

	const client = useClient();
	const { ready, tracks } = useMicrophoneAndCameraTracks();
	const [ loading, setLoading ] = useState(false);
 	const users = useAppSelector((state) => state.user.user);

	useEffect(() => {
		// function to initialise the SDK
		let init = async (name, uid) => {
			client.on('user-published', async (user, mediaType) => {
				await client.subscribe(user, mediaType);
				console.log('subscribe success');
				if (mediaType === 'video') {
					dispatch(setUser(user));
				}
				if (mediaType === 'audio') {
					user.audioTrack?.play();
				}
			});

			client.on('user-unpublished', (user, type) => {
				console.log('unpublished', user, type);
				if (type === 'audio') {
					user.audioTrack?.stop();
				}
				if (type === 'video') {
					dispatch(removeUser(user.uid));
				}
			});

			client.on('user-left', (user) => {
				console.log('leaving', user);
				dispatch(removeUser(user.uid));
			});

			await client.join(appId, name, token, uid);

			if (tracks) await client.publish([tracks[0], tracks[1]]);

			setStart(true);
		};

		if (ready && tracks) {
			init(channelName, uid);
		}
	}, [channelName, client, ready, tracks, appId, dispatch, token]);

	return (
		<div style={{ width: '100%' }}>
			{start && tracks && <Videos users={users} tracks={tracks} />}
			{/* {start && tracks && <VideoPart />} */}
			{ready && tracks && (
				<Controls
					useClient={useClient}
					tracks={tracks}
					setStart={setStart}
					setInCall={setInCall}
				/>
			)}
		</div>
	);
}

export default VideoCall;
