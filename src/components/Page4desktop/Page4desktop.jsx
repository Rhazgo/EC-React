import React from 'react';
import roundcheckboxchecked from '../../assets/bx-check-circle.svg';
import Arrowright from '../../assets/Arrowright.svg';
import overtimegraph from '../../assets/overtimegraph.svg';
import contactsandcard from '../../assets/Contacts+card.svg';
import payments from '../../assets/payments.svg fill.svg';
import cashback from '../../assets/cashback.svg.svg';

export const Page4desktop = () => {
	return (
		<>
			<div className="page" id="page4-desktop">
				<div className="container">
					<div className="simple-top">
						<div className="top-1-left">
							<h2>Make your money transfer simple and clear</h2>
							<div className="check-functions">
								<div className="checks">
									<img src={roundcheckboxchecked} alt="Checkbox checked" />
									<img src={roundcheckboxchecked} alt="Checkbox checked" />
									<img src={roundcheckboxchecked} alt="Checkbox checked" />
								</div>
								<div className="checked-text">
									<p>Banking transactions are free for you</p>
									<p>No monthly cash commission</p>
									<p>Manage payments and transactions online</p>
								</div>
							</div>
							<div className="learn-more">
								<a className="learn-more-button" type="button" href="">
									Learn more
								</a>
								<img src={Arrowright} alt="Learn more button" />
							</div>
						</div>
						<div className="top-1-right">
							<img src={overtimegraph} alt="Money over time graph" />
						</div>
					</div>

					<div className="simple-bottom">
						<div className="bottom-1-left">
							<img src={contactsandcard} alt="Picture of contact list and credit card" />
						</div>
						<div className="bottom-1-right">
							<h2>Recive payment from international bank details</h2>
							<div className="payments-icons">
								<div className="icon">
								<img className="icon-image" src={payments} alt="Easy payment icon" />

								</div>
								<div className="icon">
									<img src={cashback} alt="Wallet icon" />
								</div>
							</div>
							<div className="payments-underline">
								<p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
								<p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
							</div>
							<div className="learn-more">
								<a className="learn-more-button" type="button" href="">
									Learn more
								</a>
								<img src={Arrowright} alt="Learn more button" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
