import React, { useState } from 'react';
import styles from '../styles/videoPart.module.css';

function Controls({ tracks, setStart, setInCall, useClient }) {
	const client = useClient();

	const [trackState, setTrackState] = useState({ video: true, audio: true });

	const mute = async (type) => {
		if (type === 'audio') {
			await tracks[0].setEnabled(!trackState.audio);
			setTrackState((ps) => {
				return { ...ps, audio: !ps.audio };
			});
		} else if (type === 'video') {
			await tracks[1].setEnabled(!trackState.video);
			setTrackState((ps) => {
				return { ...ps, video: !ps.video };
			});
		}
	};

	const leaveChannel = async () => {
		await client.leave();
		client.removeAllListeners();
		tracks[0].close();
		tracks[1].close();
		setStart(false);
		setInCall(false);
	};

	return (
		<>
			<div className={styles['video-control-button']}>
				<div className={styles['button-block']}>
					<button
						onClick={() => mute('audio')}
						type="button"
						className={`${styles['btn']} ${styles['btn-primary']}`}
					>
						{trackState.audio ? 
						<div>
							<img src={'images/microphone.svg'} alt="microphone" />
						</div>
							
						:	
						<div className={styles['cross-line']}>
							<img src={'images/microphone.svg'} alt="mute"  
							// style={{ filter: 'invert(100%)' }} 
							/>
						</div>
							
						}
					</button>
					<button
						type="button"
						onClick={() => mute('video')}
						className={`${styles['btn']} ${styles['btn-primary']}`}
					>
						{trackState.video ? 
						<div>
							<img src={'images/video-icon.svg'} alt="video" />
						</div>
							
							:
							<div className={styles['cross-line-video']}>
								<img src={'images/video-icon.svg'} alt="no-video"  />
							</div>
							
						}
					</button>
					<button
						type="button"
						onClick={() => leaveChannel()}
						className={`${styles['btn']} ${styles['btn-danger']}`}
					>
						<img src={'images/call.svg'} alt="call" />
					</button>
					<button type="button" className={`${styles['btn']} ${styles['btn-primary']}`}>
						<img src={'images/sound.svg'} alt="sound" />
					</button>
					<button type="button" className={`${styles['btn']} ${styles['btn-primary']}`}>
						<img src={'images/chat.svg'} alt="chat" />
					</button>
				</div>
			</div>
		</>
	);
}

export default Controls;
