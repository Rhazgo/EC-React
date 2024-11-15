import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

const Features = ({ isDarkMode }) => {
	return (
		<>
			<div className={isDarkMode ? 'contact-page dark-mode' : 'contact-page'}>
				<Breadcrumb />
				<div className="container">
					<div className="feature-list">
						<div className="feature">
							<h3>1. Easy Payments</h3>
							<h5>"Simplify Your Transactions with a Tap"</h5>
							<p>Experience seamless payment processing with our app. Whether you're shopping online, paying in stores, or transferring money to friends, the process is as easy as a single tap. Our app ensures speed and convenience, making financial transactions a breeze.

</p>
						</div>
						<div className="feature">
							<h3>2. Data Security</h3>
							<h5>"Your Safety is Our Priority"</h5>
							<p>With state-of-the-art encryption protocols and multi-factor authentication, your personal and financial data is always secure. Our app is designed to protect your sensitive information, ensuring peace of mind while you manage your finances.</p>
						</div>
						<div className="feature">
							<h3>3. Cost Statistics</h3>
							<h5>"Track Your Spending with Precision"</h5>
							<p>Gain insights into your financial habits with our cost statistics feature. Visualize your spending patterns through intuitive charts and detailed reports, helping you stay on top of your budget and make informed financial decisions.</p>
						</div>
						<div className="feature">
							<h3>4. Support 24/7</h3>
							<h5>"We're Here for You Anytime, Anywhere"</h5>
							<p>Our dedicated support team is available around the clock to assist you with any questions or issues. Whether it's a transaction problem or a feature query, help is just a message or call away.</p>
						</div>
						<div className="feature">
							<h3>5. Regular Cashback</h3>
							<h5>"Earn While You Spend"</h5>
							<p>Get rewarded for your purchases with our regular cashback offers. Accumulate rewards on everyday transactions and redeem them effortlessly for future spending. It is our way of thanking you for choosing our app.

</p>
						</div>
						<div className="feature">
							<h3>6. Top Standards</h3>
							<h5>"Excellence in Every Feature"</h5>
							<p>We adhere to the highest industry standards to deliver a premium user experience. From flawless design to seamless functionality, every detail of our app is crafted to exceed your expectations.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
