import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react';

import Videos from './Video';
import Controls from './Controls';

import { removeUser, setUser } from '../redux/user/userSlice';

import { AGORA_CONFIG, appId, token } from '../configs/agora.config';

const useClient = createClient(AGORA_CONFIG);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

function VideoCall({ setInCall, channelName }) {
	const [start, setStart] = useState(false);

	const dispatch = useAppDispatch();

	const client = useClient();
	const { ready, tracks } = useMicrophoneAndCameraTracks();

	const users = useAppSelector((state) => state.user.user);

	useEffect(() => {
		// function to initialise the SDK
		let init = async (name) => {
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

			await client.join(appId, name, token, null);

			if (tracks) await client.publish([tracks[0], tracks[1]]);

			setStart(true);
		};

		if (ready && tracks) {
			console.log(channelName, 'channl');
			init(channelName);
		}
	}, [channelName, client, ready, tracks, appId, dispatch, token]);

	return (
		<div>
			{start && tracks && <Videos users={users} tracks={tracks} />}
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
