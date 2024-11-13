import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const Features = ({ isDarkMode }) => {
	return (
		<>
			<div className={isDarkMode ? 'contact-page dark-mode' : 'contact-page'}>
				<Breadcrumb />
			</div>
		</>
	);
};

export default Features;
