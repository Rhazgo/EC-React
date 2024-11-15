import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';
import roundmessageicon from '../assets/roundmessageicon.svg';
import addpersonicon from '../assets/addpersonicon.svg';
import bluearrow from '../assets/bluearrow.svg';
import extendarrow from '../assets/Extend arrow.svg';
import map from '../assets/map.svg';
import mappin from '../assets/mappin.svg';
import phonebuzz from '../assets/phonebuzz.svg';
import clockicon from '../assets/clockicon.svg';
import facebookicon from '../assets/facebookicon.svg';
import twittericon from '../assets/twittericon.svg';
import instagramicon from '../assets/instagramicon.svg';
import youtubeicon from '../assets/youtubeicon.svg';

const Contact = ({ isDarkMode }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedSpecialist, setSelectedSpecialist] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const specialists = [
		'Mobile Developer',
		'iOS Developer',
		'Android Developer',
		'UX/UI Developer',
		'Product Manager',
		'Support Specialist',
	];

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleSpecialistSelect = (specialist) => {
		setSelectedSpecialist(specialist);
		setIsDropdownOpen(false);
	};

	const validateForm = (e) => {
		e.preventDefault();
		let isValid = true;

		const fields = [
			{ id: 'fullName', message: 'Please enter your full name', required: true },
			{ id: 'email', message: 'Please enter a valid email address', required: true, pattern: /\S+@\S+\.\S+/ },
		];

		fields.forEach(({ id, message, pattern, required }) => {
			const input = document.querySelector(`#${id}`);
			const errorMessage = input?.nextElementSibling;

			if (input) {
				if (required && !input.value.trim()) {
					errorMessage.textContent = message;
					errorMessage.style.display = 'block';
					isValid = false;
				} else if (pattern && !pattern.test(input.value)) {
					errorMessage.textContent = message;
					errorMessage.style.display = 'block';
					isValid = false;
				} else {
					errorMessage.style.display = 'none';
				}
			} else {
				console.warn(`Element with id '${id}' not found.`);
			}
		});

		const specialistError = document.querySelector(`#specialistError`);
		if (!selectedSpecialist) {
			specialistError.textContent = 'Please select a specialist';
			specialistError.style.display = 'block';
			isValid = false;
		} else {
			specialistError.style.display = 'none';
		}

		if (isValid) {
			setSuccessMessage('Thank you for reaching out to us, we’ll get back to you as soon as possible!');
			document.querySelector('#consultationForm').reset();
			setSelectedSpecialist('');
			console.log('Form is valid, success message set');
		} else {
			setSuccessMessage('');
			console.log('Form is invalid, success message not set');
		}
	};

	return (
		<div className={isDarkMode ? 'contact-page dark-mode' : 'contact-page'}>
			<Breadcrumb />
			<div className="container">
				<div className="contact__page1">
					<div className="contact__page1_content-left">
						<h1>Contact Us</h1>
						<div className="contact__page1_content_contacts">
							<img src={roundmessageicon} alt="" />
							<div className="contact__page1_content_contact">
								<h3>Email us</h3>
								<p>Please feel free to drop us a line. We will respond as soon as possible</p>
								<div className="contactpage-link">
									<Link className="linkToMessage">
										<span>Leave a message</span>
										<img src={bluearrow} alt="" />
									</Link>
								</div>
							</div>
						</div>
						<div className="contact__page1_content_contacts">
							<img src={addpersonicon} alt="" />
							<div className="contact__page1_content_contact">
								<h3>Careers</h3>
								<p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum</p>
								<div className="contactpage-link">
									<Link className="linkToApplication">
										<span>Send an application</span>
										<img src={bluearrow} alt="" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="contact__page1_content-right">
						<form id="consultationForm" className="consultationForm" onSubmit={validateForm}>
							<h2>Get Online Consultation</h2>
							<div className="consultationForm-input-group">
								<label htmlFor="fullName" className="label">
									Full name
								</label>
								<input type="text" id="fullName" className="form-input" />
								<p className="invalid-input" style={{ display: 'none', color: 'red' }}>
									Error Msg
								</p>
							</div>
							<div className="consultationForm-input-group">
								<label htmlFor="email" className="label">
									Email
								</label>
								<input type="text" id="email" className="form-input" />
								<p className="invalid-input" style={{ display: 'none', color: 'red' }}>
									Error Msg
								</p>
							</div>
							<div className="consultationForm-input-group">
								<label htmlFor="specialist" className="label">
									Specialist
								</label>
								<div className="dropdown" id="specialist">
									<div className="dropdown-toggle" onClick={toggleDropdown}>
										{selectedSpecialist || 'Select Specialist'}
										<img
											src={extendarrow}
											alt="arrow icon"
											className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
										/>
									</div>
									{isDropdownOpen && (
										<div className="dropdown-menu">
											{specialists.map((specialist, index) => (
												<div key={index} className="dropdown-item" onClick={() => handleSpecialistSelect(specialist)}>
													{specialist}
												</div>
											))}
										</div>
									)}
								</div>
								<p id="specialistError" className="invalid-input" style={{ display: 'none', color: 'red' }}>
									Error Msg
								</p>
							</div>
							<button type="submit" className="appointment-btn">
								Make an appointment
							</button>
							{successMessage && (
								<p className="success-message" style={{ color: 'green', marginTop: '1rem' }}>
									{successMessage}
								</p>
							)}
						</form>
					</div>
				</div>
				<div className="contact__page2">
					<div className="contact__page2_content">
						<div className="contact__page2_content-left">
							<img src={map} alt="location on google maps" />
						</div>
						<div className="contact__page2_content-right">
							<h3>Medical Center 1</h3>
							<div className="medicalCenter">
								<div className="medicalCenter_content">
									<img src={mappin} alt="" />
									<a
										href="https://www.google.com/maps/dir/63.848448,20.1555968/Iangar,+4517+Washington+Avenue+Southeast,+Manchester,+KY+39495,+USA/@37.1486308,-83.7687088,15.5z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x884352a00e70879f:0x1ad06ed33b7003c!2m2!1d-83.7619013!2d37.1536361!3e4?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										rel="noopener noreferrer"
									>
										4517 Washington Ave. Manchester, Kentucky 39495
									</a>
								</div>
								<div className="medicalCenter_content">
									<img src={phonebuzz} alt="" />
									<span>(406) 555-0120</span>
								</div>
								<div className="medicalCenter_content">
									<img src={clockicon} alt="" />
									<div className="time-open">
										<span>Mon - Fri: 9:00 am - 22:00 am</span>
										<span>Sat - Sun: 9:00 am - 20:00 am</span>
									</div>
								</div>
							</div>
							<h3>Medical Center 2</h3>
							<div className="medicalCenter">
								<div className="medicalCenter_content">
									<img src={mappin} alt="" />
									<a
										href="https://www.google.com/maps/dir/New+Jersey,+USA/Dhanprada,+2464+Royal+Ln,+Mesa,+NJ+45463,+USA/@40.0558719,-74.5326033,11.75z/data=!4m14!4m13!1m5!1m1!1s0x89c0fb959e00409f:0x2cd27b07f83f6d8d!2m2!1d-74.4056612!2d40.0583238!1m5!1m1!1s0x89c1655555555555:0x3b6b3c3e24596378!2m2!1d-74.4056612!2d40.0583238!3e4?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D"
										target="_blank"
										rel="noopener noreferrer"
									>
										2464 Royal Ln. Mesa, New Jersey 45463
									</a>
								</div>
								<div className="medicalCenter_content">
									<img src={phonebuzz} alt="" />
									<span>(406) 544-0123</span>
								</div>
								<div className="medicalCenter_content">
									<img src={clockicon} alt="" />
									<div className="time-open">
										<span>Mon - Fri: 9:00 am - 22:00 am</span>
										<span>Sat - Sun: 9:00 am - 20:00 am</span>
									</div>
								</div>
							</div>
							<div className="socialmedia">
								<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
									<img src={facebookicon} alt="" />
								</a>
								<a href="https://x.com/?lang=sv" target="_blank" rel="noopener noreferrer">
									<img src={twittericon} alt="" />
								</a>
								<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
									<img src={instagramicon} alt="" />
								</a>
								<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
									<img src={youtubeicon} alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
