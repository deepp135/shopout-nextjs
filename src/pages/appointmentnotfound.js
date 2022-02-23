import React from 'react';
import styles from '../styles/error.module.css';

function AppointmentNotFound() {
	return <div className={styles['container']}>The appointment is either expired or not available for this moment</div>;
}

export default AppointmentNotFound;
