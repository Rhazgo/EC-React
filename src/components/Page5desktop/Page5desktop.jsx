import React from 'react';
import reviewdesigner from '../../assets/review-designer.svg';
import reviewdeveloper from '../../assets/review-developer.svg';

export const Page5desktop = () => {
	return (
		<>
			<div className="page" id="page5-desktop">
				<div className="container">
					<div className="our-clients">
						<div className="clients">
							<h2>Clients are Loving Our App</h2>
						</div>
						<img src={reviewdesigner} alt="Review from the designer" />
						<img src={reviewdeveloper} alt="Review from the developer" />
					</div>
				</div>
			</div>
		</>
	);
};
