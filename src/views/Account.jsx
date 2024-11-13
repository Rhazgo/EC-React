import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const Account = ({ isDarkMode }) => {
	return (
		<>
			<div className={isDarkMode ? 'account-page dark-mode' : 'account-page'}>
				<Breadcrumb />
				
			</div>
		</>
	);
};

export default Account;
