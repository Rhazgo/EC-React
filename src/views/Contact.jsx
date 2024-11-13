import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const Contact = ({ isDarkMode }) => {
	return (
		<>
			<div className={isDarkMode ? 'contact-page dark-mode' : 'contact-page'}>
				<Breadcrumb />
				<div className="container">
					<div className="contact_page">
						<h1>Contact Us</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
