import { AgoraVideoPlayer } from 'agora-rtc-react';
import styles from '../styles/videoPart.module.css';

const Videos = ({ users, tracks, children }) => {
	let mainUser = users.find(user => user.uid === 1)
	return (
			<div className={styles['video-chat']}>
				{/* video-box */}
				<div className={styles['video-box']}>
					<div className={styles['main-image']}>
					{mainUser ? 
						<AgoraVideoPlayer
							style={{ height: '100%', width: '100%' }}
							videoTrack={mainUser.videoTrack}
						/> 
					: 
						<AgoraVideoPlayer
							style={{ height: '100%', width: '100%' }}
							videoTrack={tracks[1]}
						/>
					}
					</div>
					<div className={styles['group-call']}>
						<div className={styles['member-images']}>
							{mainUser && 
								<div className={styles.box}>
									<AgoraVideoPlayer
										style={{ height: '100%', width: '100%' }}
										videoTrack={tracks[1] /*user.videoTrack*/}
									/>
								</div>
							}
							{users.length > 0 &&
								users.filter(user => user.uid !== 1).map((user) => {
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
					{/* <div className={styles['user-name']}>
               			 <p className={styles['name-plate']}>Rihana</p>
              		</div> */}
				</div>
				{children}
			</div>
	);
};

export default Videos;
