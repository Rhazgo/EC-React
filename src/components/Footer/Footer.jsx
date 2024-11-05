import React from 'react';
import bellicon from '../../assets/notification-icon-1.svg fill.svg';
import emailicon from '../../assets/EmailIcon.svg';

export const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="subscribe-wrapper">
						<div className="subscribe-section">
							<div className="bell-icon">
								<img src={bellicon} alt="notification bell" />
							</div>
							<div className="subscribe-text">
								<h3>Subscribe to our newsletter</h3>
								<span className="extra-text">to stay informed about latest updates</span>
							</div>
						</div>
						<div className="subscribe-form">
							<div className="input-group">
								<div className="email-icon">
									<img src={emailicon} alt="" />
								</div>
								<input type="email" placeholder="Your email" required />
								<button type="submit">Subscribe</button>
							</div>
						</div>
					</div>
					<div className="silicon-rights">
						<span className="rights">© 2024 Silicon. All rights reserved.</span>
						<span className="credits">Credit Madras Themes</span>
					</div>
				</div>
			</footer>
		</>
	);
};
