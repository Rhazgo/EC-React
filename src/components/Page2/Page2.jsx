import React from 'react';
import Brandstablet from '../../assets/brands-tablet.svg';
import brand1 from '../../assets/logo1.svg';
import brand2 from '../../assets/logo2.svg';
import brand3 from '../../assets/logo3.svg';
import brand4 from '../../assets/logo4.svg';
import brand5 from '../../assets/logo5.svg';
import brand6 from '../../assets/logo6.svg';

import mobilepage2 from '../../assets/mobilepage2.svg';
import payments from '../../assets/payments.svg fill.svg';
import statistics from '../../assets/statistics.svg.svg';
import cashback from '../../assets/cashback.svg.svg';
import happyicon from '../../assets/happy.svg.svg';
import securityicon from '../../assets/security.svg fill.svg';
import supporticon from '../../assets/support.svg.svg';

export const Page2 = () => {
	return (
		<>
			<div className="page" id="page2">
				<div className="app-features">
					<div className="container">
						<div className="brands-tablet">
							<div className="brand">
								<img id="brand1" src={brand1} alt="picture of brand" />
							</div>
							<div className="brand">
								<img id="brand2" src={brand2} alt="picture of brand" />
							</div>
							<div className="brand">
								<img id="brand3" src={brand3} alt="picture of brand" />
							</div>
							<div className="brand">
								<img id="brand4" src={brand4} alt="picture of brand" />
							</div>

							<div className="brand">
								<img id="brand5" src={brand5} alt="pictures of brands" />
							</div>
							<div className="brand">
								<img id="brand6" src={brand6} alt="pictures of brands" />
							</div>
						</div>

						<div className="main-page2">
							<div className="mobilepage2">
								<img src={mobilepage2} alt="Picture of a phone with bank card and transactions" />
							</div>
							<div className="container">
								<h2 className="features-title">App Features</h2>
								<p className="lorem">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus
									facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
								</p>

								<div className="features">
									<div className="first-card">
										<div className="feature-card" id="feature1">
											<div className="icon">
												<img className="icon-image" src={payments} alt="Easy payment icon" />
											</div>
											<div className="text">
												<h3 className="features-main">Easy Payments</h3>
												<p className="features-second">
													Id mollis consectetur congue egestas egestas suspendisse blandit justo.
												</p>
											</div>
										</div>

										<div className="feature-card" id="feature2">
											<div className="icon">
												<img className="icon-image" src={securityicon} alt="Security icon" />
											</div>
											<div className="text">
												<h3 className="features-main">Data Security</h3>
												<p className="features-second">
													Augue pulvinar justo, fermentum fames aliguam accumsan vestibulum non.
												</p>
											</div>
										</div>
									</div>

									<div className="second-card">
										<div className="feature-card" id="feature3">
											<div className="icon">
												<img className="icon-image" src={statistics} alt="Statistics icon" />
											</div>
											<div className="text">
												<h3 className="features-main">Cost Statistics</h3>
												<p className="features-second">
													Id mollis consectetur congue egestas egestas suspendisse blandit justo.
												</p>
											</div>
										</div>

										<div className="feature-card" id="feature4">
											<div className="icon">
												<img className="icon-image" src={supporticon} alt="Support icon" />
											</div>
											<div className="text">
												<h3 className="features-main">Support 24/7</h3>
												<p className="features-second">
													A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.
												</p>
											</div>
										</div>
									</div>

									<div className="thrid-card">
										<div className="feature-card" id="feature5">
											<div className="icon">
												<img className="icon-image" src={cashback} alt="Cashback icon" />
											</div>
											<div className="text">
												<h3 className="features-main">Regular Cashback</h3>
												<p className="features-second">
													Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.
												</p>
											</div>
										</div>

										<div className="feature-card" id="feature6">
											<div className="icon">
												<img className="icon-image" src={happyicon} alt="Top standards icon" />
											</div>
											<div className="text">
												<h3 className="features-main">Top Standards</h3>
												<p className="features-second">
													Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
