import React from 'react';
import styles from '../styles/footer.module.css';

function Footer() {
	return (
			<section className={styles['footer-part']}>
				<div className={styles['social-icon']}>
					<a href="#" className={`fa fa-facebook ${styles['fa-i']}`}></a>
					<a href="#" className={`fa fa-linkedin ${styles['fa-i']}`}></a>
					<a href="#" className={`fa fa-instagram ${styles['fa-i']}`}></a>
				</div>
			</section>
	);
}

export default Footer;
