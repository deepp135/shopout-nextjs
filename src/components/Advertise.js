import React from 'react';
import styles from '../styles/advertise.module.css';

function Advertise() {
	return (
		
			<div className={styles['banner-part']}>
			<div className={styles['banner-content']}>
				<h2>DEALS OF THE DAY</h2>
			</div>
			<div className={styles['image-part']}>
				<div className={styles['discount-tag']}>
					<h6>25% OFF</h6>
				</div>
				<img src={'/images/banner-background.svg'} alt="banner-image" />
			</div>
		</div>
		
	);
}

export default Advertise;
