import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

import styles from '../styles/slider.module.css';

const options = {
	stagePadding: 0,
	items: 3,
	loop: true,
	margin: 65,
	nav: true,
	navText: ['<img src="images/prev.svg">', '<img src="images/next.svg">'],
	navContainer: '.slider-part .custom-nav',
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 3,
		},
	},
};

function Slider() {
	return (
		<section className={styles['slider']}>
			<div className={styles['slider-container']}>
				<div className={styles['slider-part']}>
					<OwlCarousel {...options} className={styles['owl-theme']}>
						<div className={styles['slider-item']}>
							<div className={styles['you-tube']}>
								<img src={'images/you-tube.svg'} alt="item" />
							</div>
							<img src={'images/item-3.png'} alt="item" />
						</div>
						<div className={styles['slider-item']}>
							<div className={styles['you-tube']}>
								<img src={'images/you-tube.svg'} alt="item" />
							</div>
							<img src={'images/item-2.png'} alt="item" />
						</div>
						<div className={styles['slider-item']}>
							<div className={styles['you-tube']}>
								<img src={'images/you-tube.svg'} alt="item" />
							</div>
							<img src={'images/item-1.png'} alt="item" />
						</div>
						<div className={styles['slider-item']}>
							<div className={styles['you-tube']}>
								<img src={'images/you-tube.svg'} alt="item" />
							</div>
							<img src={'images/item-3.png'} alt="item" />
						</div>
						<div className={styles['slider-item']}>
							<div className={styles['you-tube']}>
								<img src={'images/you-tube.svg'} alt="item" />
							</div>
							<img src={'images/item-2.png'} alt="item" />
						</div>
						<div className={styles['slider-item']}>
							<div className={styles['you-tube']}>
								<img src={'images/you-tube.svg'} alt="item" />
							</div>
							<img src={'images/item-1.png'} alt="item" />
						</div>
						<div className={styles['slider-item']}>
							<div className={styles['you-tube']}>
								<img src={'images/you-tube.svg'} alt="item" />
							</div>
							<img src={'images/item-3.png'} alt="item" />
						</div>
					</OwlCarousel>
					{/* slider-navigation */}
					<div class={styles['owl-controls']}>
						<div className={`${styles['custom-nav']} ${styles['owl-nav']}`}></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Slider;
