import React, { useState, useEffect } from 'react';
import styles from '../styles/chatpart.module.css';
import { collection, addDoc, setDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../configs/firebase.config';
import { useAppSelector } from '../hooks/hooks';
import moment from 'moment';

function ChatPart({ channel, uid }) {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState('');
	const currentUserName = useAppSelector((state) => state.user.currentUserName);

	// <div className={`${styles['msg']} ${styles['receiver']}`}>
	/* <div className={`${styles['msg']} ${styles['sender']}`}></div> */

	const handleSendMessage = async () => {
		await setDoc(doc(collection(db, 'THREADS', channel, 'MESSAGES')), {
			text: input,
			createdAt: moment().format('hh:mm a'),
			user: { uid, name: currentUserName },
		});
        setInput('')
	};

	const loadChat = () => {
		const q = query(
			collection(db, 'THREADS', channel, 'MESSAGES'),
			orderBy('createdAt', 'asc')
		);

		const unsub = onSnapshot(q, (doc) => {
			let messages = [];
			doc.forEach((message) => {
				messages = [...messages, message.data()];
			});
			setMessages(messages);
		});
	};

	useEffect(() => {
		loadChat();
		//set messages from firebase
	}, []);

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
					{messages.map((message) => {
						if (message.user.uid === uid) {
							return (
								<div className={styles['messages']}>
									<div className={`${styles['msg']} ${styles['sender']}`}>
										<b>{message.user.name}</b>
										<div className={styles['msg-content']}>{message.text}</div>
									</div>
									<small className={styles['time']}>{message.createdAt}</small>
								</div>
							);
						}

						return (
							<div className={styles['messages']}>
								<div className={`${styles['msg']} ${styles['receiver']}`}>
									<b>{message.user.name}</b>
									<div className={styles['msg-content']}>{message.text}</div>
								</div>
								<small className={styles['time']}>{message.createdAt}</small>
							</div>
						);
					})}
				</div>
				<div className={styles['chat-footer-btn']}>
					<input
						type="text"
						className={styles['custom-input-field']}
						placeholder="Write your message..."
						onKeyDown={(e) => {
							if (e.key === 'Enter') handleSendMessage();
						}}
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<div className={styles['send-button']}>
						<button
							type="button"
							className={`${styles['btn']} ${styles['btn-primary']}`}
							onClick={handleSendMessage}
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
