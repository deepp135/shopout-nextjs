import { AgoraVideoPlayer } from 'agora-rtc-react';

const Videos = ({ users, tracks }) => {
	return (
		<div id="videos">
			<AgoraVideoPlayer style={{ height: '200px', width: '200px' }} videoTrack={tracks[1]} />
			{users.length > 0 &&
				users.map((user) => {
					if (user.videoTrack) {
						return (
							<AgoraVideoPlayer
								style={{ height: '200px', width: '200px' }}
								videoTrack={user.videoTrack}
								key={user.uid}
							/>
						);
					} else return null;
				})}
		</div>
	);
};

export default Videos;
