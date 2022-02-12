import React from 'react';
import styles from '../styles/chatpart.module.css';

function ChatPart() {
	return (
		<div className={styles['chat-part']}>
			{/* chat-box */}
			<div className={styles['chat-boat-part']}>
				<div className={styles['chat-header']}>
					<h6>Chat</h6>
					<div className={styles['close-btn']}>
						<button type="button" className={styles['btn']}>
							<img src={'images/close-icon.svg'} alt="close-icon" />
						</button>
					</div>
				</div>
				<div className={styles['chat-msg']}>
					<div className={styles['messages']}>
						<div className={`${styles['msg']} ${styles['receiver']}`}>
							<b>Aman</b>
							<div className={styles['msg-content']}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								vestibulum erat vel tellus dignissim, id posuere nisl ultrices.
								Maecenas ut erat nec urna finibus pretium. Curabitur ipsum nisi,
								aliquam id semper id.
							</div>
						</div>
						<small className={styles['time']}>10 min ago</small>
					</div>
					<div className={styles['messages']}>
						<div className={`${styles['msg']} ${styles['receiver']}`}>
							<b>Amit</b>
							<div className={styles['msg-content']}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								vestibulum erat vel tellus dignissim, id posuere nisl ultrices.
								Maecenas ut erat nec urna finibus pretium. Curabitur ipsum nisi,
								aliquam id semper id.
							</div>
						</div>
						<small className={styles['time']}>10 min ago</small>
					</div>
					<div className={styles['messages']}>
						<div className={`${styles['msg']} ${styles['receiver']}`}>
							<b>Sanjay</b>
							<div className={styles['msg-content']}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								vestibulum erat vel tellus dignissim, id posuere nisl ultrices.
								Maecenas ut erat nec urna finibus pretium. Curabitur ipsum nisi,
								aliquam id semper id.
							</div>
						</div>
						<small className={styles['time']}>10 min ago</small>
					</div>
					<div className={styles['messages']}>
						<div className={`${styles['msg']} ${styles['sender']}`}>
							<b>Rihana</b>
							<div className={styles['msg-content']}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								vestibulum erat vel tellus dignissim, id posuere nisl ultrices.
								Maecenas ut erat nec urna finibus pretium. Curabitur ipsum nisi,
								aliquam id semper id.
							</div>
						</div>
						<small className={styles['time']}>10 min ago</small>
					</div>
				</div>
				<div className={styles['chat-footer-btn']}>
					<input
						type="text"
						className={styles['custom-input-field']}
						placeholder="Write your message..."
					/>
					<div className={styles['send-button']}>
						<button
							type="button"
							className={`${styles['btn']} ${styles['btn-primary']}`}
						>
							<img src={'images/send.svg'} alt="send" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatPart;
