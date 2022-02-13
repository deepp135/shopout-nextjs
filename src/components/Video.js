import {
	ILocalVideoTrack,
	IRemoteVideoTrack,
	ILocalAudioTrack,
	IRemoteAudioTrack,
	ICameraVideoTrack,
	UID,
	IMicrophoneAudioTrack,
	ILocalTrack,
} from 'agora-rtc-sdk-ng';
import { AgoraVideoPlayer } from 'agora-rtc-react';
import styles from '../styles/videoPart.module.css';

const Videos = ({ users, tracks }) => {
	return (
		<div className={styles['chat-part']}>
			<div className={styles['video-chat']}>
				{/* video-box */}
				<div className={styles['video-box']}>
					<div className={styles['main-image']}>
						<AgoraVideoPlayer
							style={{ height: '100%', width: '100%' }}
							videoTrack={tracks[1]}
						/>
					</div>
					<div className={styles['group-call']}>
						<div className={styles['member-images']}>
							{users.length > 0 &&
								users.map((user) => {
									if (user.videoTrack) {
										return (
											<div className={styles.box}>
												<AgoraVideoPlayer
													style={{ height: '100%', width: '100%' }}
													videoTrack={user.videoTrack}
													key={user.uid}
												/>
											</div>
										);
									} else return null;
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Videos;
