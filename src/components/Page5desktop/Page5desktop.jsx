import React from 'react';

import quotes from '../../assets/quotes.svg';
import fourstars from '../../assets/fourstars.svg';
import fivestars from '../../assets/fivestars.svg';
import Fanny from '../../assets/Fanny.svg';
import Albert from '../../assets/Albert.svg';

export const Page5desktop = () => {
	return (
		<>
			<div className="page" id="page5-desktop">
				<div className="container">
					<div className="our-clients">
						<div className="clients">
							<h2>Clients are Loving Our App</h2>
						</div>

						<div className="quotes-parent-left">
							<img className="quotes" src={quotes} alt="" />
						</div>

						<div className="review">
							<div>
								<img className="stars" src={fourstars} alt="" />
								<p>
									Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posiere rhoncus, egestas
									lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
								</p>
								<div className="reviewer">
									<img src={Fanny} alt="Review from the designer" />
									<div className="reviewers-info">
										<span className="name">Fannie Summers</span>
										<span className="profession">Designer</span>
									</div>
								</div>
							</div>
						</div>
						<div className="quotes-parent-right">
							<img className="quotes" src={quotes} alt="" />
						</div>
						<div className="review">
							<img className="stars" src={fivestars} alt="" />
							<p>
								Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla
								tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
							</p>
							<div className="reviewer">
								<img src={Albert} alt="Review from the developer" />
								<div className="reviewers-info">
									<span className="name">Albert Flores</span>
									<span className="profession">Developer</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
