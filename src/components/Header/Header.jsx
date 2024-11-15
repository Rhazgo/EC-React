import React from 'react';
import Siliconlogo from '../../assets/Siliconlogo.svg';
import ToggleButton from '../../assets/Button - Toggle navigation.svg';
import tinyman from '../../assets/tinyman.svg';
import { Link } from 'react-router-dom';

export const Header = ({ onToggleDarkMode }) => {
	return (
		<header className="header">
			<div className="container">
				<div className="nav-left">
					<Link className="logo" to="/">
						<img src={Siliconlogo} alt="Silicon Logo" />
						<span className="logo-text">Silicon</span>
					</Link>
					<Link className='features-link' to={"/features"}>
						<span >Features</span>
					</Link>
					<Link className='contact-link' to={"/contact"}>
						<span >Contact</span>
					</Link>
				</div>
				<div className="nav-right">
					<div className="darkmode">Dark Mode</div>
					<div className="toggle-switch">
						<label className="toggle">
							<input className='darkmode-toggle' type="checkbox" onChange={onToggleDarkMode} />
							<span className="slider"></span>
						</label>
					</div>
					<div className="menu-icon">
						<img className="menu-icon-img" src={ToggleButton} alt="Menu Icon" />
					</div>
					<Link to={'/Account'}>
						<div className="sign-in-button">
							<img className="tinyman" src={tinyman} alt="Sign in/up button" />
							<div className="sign-in-text">Sign in / up</div>
						</div>
					</Link>
				</div>
			</div>
		</header>
	);
};
