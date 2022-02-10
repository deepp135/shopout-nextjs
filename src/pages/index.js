import Head from 'next/head';

import Counter from '../components/Counter';
import styles from '../styles/Home.module.css';

const IndexPage = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>Welcome to Shopout</header>
		</div>
	);
};

export default IndexPage;
