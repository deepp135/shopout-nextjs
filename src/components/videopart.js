import Image from 'next/image';
import React from 'react';
import styles from '../styles/videoPart.module.css';

function VideoPart() {
	return (
		<div className={styles['chat-part']}>
			<div className={styles['video-chat']}>
				{/* video-box */}
				<div className={styles['video-box']}>
					<div className={styles['main-image']}>
						<Image layout="fill" src={'/images/main-image.png'} alt="main-img" />
					</div>
					<div className={styles['group-call']}>
						<div className={styles['member-images']}>
							<div className={styles.box}>
								<img src={'images/call-1.svg'} />
							</div>
							<div className={styles.box}>
								<img src={'images/call-2.svg'} />
							</div>
							<div className={styles.box}>
								<img src={'images/call-3.svg'} />
							</div>
						</div>
					</div>
				</div>
				<div className={styles['video-control-button']}>
					<div className={styles['button-block']}>
						<button
							type="button"
							className={`${styles['btn']} ${styles['btn-primary']}`}
						>
							<img src={'images/microphone.svg'} alt="microphone" />
						</button>
						<button
							type="button"
							className={`${styles['btn']} ${styles['btn-primary']}`}
						>
							<img src={'images/video-icon.svg'} alt="video" />
						</button>
						<button
							type="button"
							className={`${styles['btn']} ${styles['btn-danger']}`}
						>
							<img src={'images/call.svg'} alt="call" />
						</button>
						<button
							type="button"
							className={`${styles['btn']} ${styles['btn-primary']}`}
						>
							<img src={'images/sound.svg'} alt="sound" />
						</button>
						<button
							type="button"
							className={`${styles['btn']} ${styles['btn-primary']}`}
						>
							<img src={'images/chat.svg'} alt="chat" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoPart;
