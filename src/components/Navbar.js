import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
	return (
		<div className={styles.container}>
			{/* header part start here */}
			<header className={styles['App-header']}>
				<div className={styles['logo-part']}>Logo</div>
				<div className={styles['small-devices']}>
					<i className="fa fa-bars"></i>
				</div>
				<div className={`${styles['link-part']} ${styles['large-devices']}`}>
					<ul>
						<li>
							<a href="" className={styles['nav-link']}>
								Home
							</a>
						</li>
						<li>
							<a href="" className={styles['nav-link']}>
								What we do
							</a>
						</li>
						<li>
							<a href="" className={styles['nav-link']}>
								Reviews
							</a>
						</li>
						<li>
							<a href="" className={styles['nav-link']}>
								Our partners
							</a>
						</li>
						<li>
							<a href="" className={styles['nav-link']}>
								Contact Us
							</a>
						</li>
					</ul>
				</div>

				<div className={`${styles['social-icon']} ${styles['large-devices']}}`}>
					<a href="#" className={`fa fa-facebook ${styles['fa-i']}`}></a>
					<a href="#" className={`fa fa-linkedin ${styles['fa-i']}`}></a>
					<a href="#" className={`fa fa-instagram ${styles['fa-i']}`}></a>
				</div>
			</header>
		</div>
	);
}

export default Navbar;
