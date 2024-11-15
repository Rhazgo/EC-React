import React, { useEffect, useState } from 'react';
import quotes from '../../assets/quotes.svg';
import fourstars from '../../assets/fourstars.svg';
import fivestars from '../../assets/fivestars.svg';

export const Page5desktop = () => {
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		async function fetchTestimonials() {
			try {
				const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
				const data = await response.json();
				setTestimonials(data);
			} catch (error) {
				console.error('Error fetching testimonials:', error);
			}
		}

		fetchTestimonials();
	}, []);

	return (
		<>
			<div className="page" id="page5-desktop">
				<div className="container">
					<div className="our-clients">
						<div className="clients">
							<h2>Clients are Loving Our App</h2>
						</div>

						{testimonials.map((testimonial) => (
							<div className="review" key={testimonial.id}>
								<img className="quotes" src={quotes} alt="" />

								<img
									className="stars"
									src={testimonial.starRating === 5 ? fivestars : fourstars}
									alt={`${testimonial.starRating} star rating`}
								/>
								<p>{testimonial.comment}</p>
								<div className="reviewer">
									<img src={testimonial.avatarUrl} alt={`Review from ${testimonial.author}`} />
									<div className="reviewers-info">
										<span className="name">{testimonial.author}</span>
										<span className="profession">{testimonial.jobRole}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
