import React from 'react';
import appleicon from '../../assets/appleicon.svg';
import googleplayicon from '../../assets/googleplayicon.svg';
import button from '../../assets/Button.svg';
import Duomobile from '../../assets/Duomobile.svg';
import DuomobileDesktop from '../../assets/main-content-image-desktop.svg';

export const Page1 = () => {
	return (
		<>
			<div className="page" id="page1">
				<div className="container">
					<h1 className="main-title">
						<span> Manage All Your </span>
						<span>Money in One App </span>
					</h1>

					<div className="main-content">
						<div className="main-dnb">
							<h1 className="main-title-desktop">
								<span> Manage All Your </span>
								<span>Money in One App </span>
							</h1>
							<p className="main-description" id="main-underline">
								We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket
							</p>

							<div className="app-buttons">
								<a href="https://www.apple.com/se/app-store/" className="app-link">
									<img className="apple" src={appleicon} alt="Download on the App Store" />
									<div className="app-wrapper">
										<span className="app-description-small">Download on the</span>
										<span className="app-description-big">App Store</span>
									</div>
								</a>
								<a href="https://play.google.com/store/apps?hl=sv" className="app-link">
									<img className="google" src={googleplayicon} alt="Get it on Google Play" />
									<div className="app-wrapper">
										<span className="app-description-small">GET IT ON</span>
										<span className="app-description-big">Google Play</span>
									</div>
								</a>
							</div>
							<div className="discover">
								<img src={button} alt="" className="Button" />
								<p className="discover-text">Discover more</p>
							</div>
						</div>
						<div className="main-content-image">
							<img src={Duomobile} alt="Mobile Image" />
						</div>
						<div className="main-content-image-desktop">
							<img src={DuomobileDesktop} alt="Mobile Image" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
