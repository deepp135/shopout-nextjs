import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
	return (
		<div className={styles['head-content']}>
			<div className={styles.container}>
				{/* header part start here */}
				<header className={styles['App-header']}>
					<div className={styles['logo-part']}>Logo</div>
					<div className={styles['small-devices']}>
						<i className={`fa fa-bars ${styles['icon-bar']}`}></i>
					</div>
					<div className='toggle-dropdown sidebar sidebar-open'>
						<div className='closeBtn'>
							<img src={'images/close-icon.svg'} alt="close-icon" />
						</div>
						<div className={`${styles['sidebar-content']}`} >
							<div className={`${styles['link-part']}`}>
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
							<div className={`${styles['social-icon']}`}>
							<a href="#" className={`fa fa-facebook ${styles['fa-i']}`}></a>
							<a href="#" className={`fa fa-linkedin ${styles['fa-i']}`}></a>
							<a href="#" className={`fa fa-instagram ${styles['fa-i']}`}></a>
							</div>
						</div>
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
					<div className={`${styles['social-icon']} ${styles['large-devices']}`}>
						<a href="#" className={`fa fa-facebook ${styles['fa-i']}`}></a>
						<a href="#" className={`fa fa-linkedin ${styles['fa-i']}`}></a>
						<a href="#" className={`fa fa-instagram ${styles['fa-i']}`}></a>
					</div>
				</header>
			</div>
		</div>
	);
}

export default Navbar;
