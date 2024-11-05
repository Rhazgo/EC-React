import React from 'react';
import Siliconlogo from '../../assets/Siliconlogo.svg';
import ToggleButton from '../../assets/Button - Toggle navigation.svg';
import tinyman from '../../assets/tinyman.svg';

export const Header = ({ onToggleDarkMode }) => {
	return (
		<header className="header">
			<div className="container">
				<div className="nav-left">
					<img src={Siliconlogo} alt="Silicon Logo" className="logo" />
					<span className="logo-text">Silicon</span>
				</div>
				<div className="nav-right">
					<div className="darkmode">Dark Mode</div>
					<div className="toggle-switch">
						<label className="toggle">
							<input type="checkbox" onChange={onToggleDarkMode} />
							<span className="slider"></span>
						</label>
					</div>
					<div className="menu-icon">
						<img className="menu-icon-img" src={ToggleButton} alt="Menu Icon" />
					</div>
					<a href="">
						<div className="sign-in-button">
							<img className="tinyman" src={tinyman} alt="Sign in/up button" />
							<div className="sign-in-text">Sign in / up</div>
						</div>
					</a>
				</div>
			</div>
		</header>
	);
};
