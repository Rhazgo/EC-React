import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import { Link } from 'react-router-dom';

const Account = ({ isDarkMode }) => {
	const location = useLocation();

	const isSubpage = location.pathname !== '/Account';

	return (
		<div className={isDarkMode ? 'account-page dark-mode' : 'account-page'}>
			<Breadcrumb />
			{!isSubpage && (
				<div className="container">
					<div className="member-benefits">
						<h2>As a member you get even more benefits!</h2>

						<Link to={'/Account/SignIn'}>
							<button className="login-btn-signin">Sign in</button>
						</Link>
						<Link to={'/Account/Register'}>
							<button className="login-btn-signup">Become a member</button>
						</Link>
					</div>
				</div>
			)}
			<Routes>
				<Route path="SignIn" element={<SignIn />} />
				<Route path="ForgotPassword" element={<ForgotPassword />} />
				<Route path="Register" element={<Register />} />
			</Routes>
		</div>
	);
};

export default Account;
