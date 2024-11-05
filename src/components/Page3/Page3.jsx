import React from 'react';
import bigphoneleft from '../../assets/Bigphoneleft.svg';
import bigphonedark from '../../assets/bigphonedark.svg';
import bigphoneshell from '../../assets/bigphoneshell.svg';
import bigphoneright from '../../assets/Bigphoneright.svg';
import Desktopphone1 from '../../assets/Desktopphone1.svg';
import Desktopphone2 from '../../assets/Desktopphone2.svg';
import Desktopphone3 from '../../assets/Desktopphone3.svg';

export const Page3 = () => {
	return (
		<>
			<div className="page" id="page3">
				<div className="how">
					<div className="container">
						<h2 className="how-main">How Does It Work?</h2>
						<div className="bigphone">
							<img src={bigphoneleft} alt="Picture of a phone with transactions" className="Bigphoneleft" />
							<div className="bigphonecenter-wrapper">
								<img className="bigphoneshell" src={bigphoneshell} alt="" />
								<img className="bigphonedark" src={bigphonedark} alt="Picture of phone contacts" />
							</div>
							<img src={bigphoneright} alt="Picture of a phone about to transfer money" className="Bigphoneright" />
						</div>
						<div className="bigphone-desktop">
							<img src={Desktopphone1} alt="Phone with monthly spending graph" />
							<img src={Desktopphone2} alt="Phone with credit card and transactions" />
							<img src={Desktopphone3} alt="Phone with bank account balance and contacts" />
						</div>
						<h3 className="how-second">
							<span className="latest-transaction">Latest transaction history</span>
							<span className="step3"> Step 3.</span>
							<span className="Transfers">Transfers to people from your contact list</span>
						</h3>

						<p className="how-small">
							Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis
							fermentum, at nec lacus.
						</p>
						<p className="how-small-desktop">
							Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
							consectetur condimentum.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
