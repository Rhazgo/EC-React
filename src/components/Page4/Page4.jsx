import React from 'react';
import whitearrowup from '../../assets/White arrow up.svg';
import extendarrow from '../../assets/Extend arrow.svg';
import phoneicon from '../../assets/phoneicon.svg';
import bluearrow from '../../assets/bluearrow.svg';
import greenarrow from '../../assets/greenarrow.svg';
import messageicon from '../../assets/messageicon.svg';

export const Page4 = () => {
	return (
		<>
			<div className="page" id="page4">
				<div className="FAQ">
					<div className="container">
						<div className="faq-grid">
							<div className="faq-grid-cell">
								<div className="questions-introduction">
									<h2>Any questions? Check out the FAQs</h2>
									<p>Still have unanswered questions and need to get in touch?</p>
								</div>
							</div>
							<div className="faq-grid-cell">
								<div className="faq-list">
									<div className="question open" id="first-question">
										<h3 className="">Is any of my personal information stored in the App?</h3>
										<div className="arrow-container">
											<img className="faq-buttons" src={whitearrowup} alt="Extend comment button" />
										</div>
									</div>

									<div className="question closed" id="first-question-tablet">
										<h3 className="">Is any of my personal information stored in the App?</h3>
										<div className="arrow-container">
											<img className="faq-buttons" src={extendarrow} alt="Extend comment button" />
										</div>
									</div>
									<div className="answer">
										<p>
											Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
											cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
											fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi,
											enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique
											tincidunt suspendisse ut consequat.
										</p>

										<p>
											Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere.
											Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc
											purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.
										</p>
									</div>
									<div className="question" id="second-question">
										<h3>What Formats can I download my transaction history in?</h3>
										<div className="arrow-container">
											<img className="faq-buttons" src={extendarrow} alt="Extend comment button" />
										</div>
									</div>

									<div className="question" id="third-question">
										<h3>Can I schedule future transfers?</h3>
										<div className="arrow-container">
											<img className="faq-buttons" src={extendarrow} alt="Extend comment button" />
										</div>
									</div>

									<div className="open-question-tablet" id="">
										<div className="faq-and-arrow">
											<h3 className="">Can I schedule future transfers?</h3>
											<div className="arrow-container">
												<img className="faq-buttons" src={whitearrowup} alt="Extended comment button" />
											</div>
										</div>
										<div className="answer-tablet">
											Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et,
											cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
											fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi,
											enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique
											tincidunt suspendisse ut consequat.
										</div>
									</div>

									<div className="question" id="fourth-question">
										<h3>When can I use Banking App services?</h3>
										<div className="arrow-container">
											<img className="faq-buttons" src={extendarrow} alt="Extend comment button" />
										</div>
									</div>
									<div className="question" id="fifth-question">
										<h3>Can I create my own password that is easy for me to remember?</h3>
										<div className="arrow-container">
											<img className="faq-buttons" src={extendarrow} alt="Extend comment button" />
										</div>
									</div>
									<div className="question" id="sixth-question">
										<h3>What happens if I forget or lose my password?</h3>
										<div className="arrow-container">
											<img className="faq-buttons" src={extendarrow} alt="Extend comment button" />
										</div>
									</div>

									<div className="contact">
										<div className="btn-container">
											<div className="contact-btn" type="button">
												Contact us now
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="faq-grid-cell">
								<div className="contact-tablet">
									<div className="contact-phone">
										<img src={phoneicon} alt="Phone Icon" />
										<h4 className="h4">Still have questions?</h4>

										<div className="contact-us">
											<a href="" className="contact-us-blue">
												Contact us
											</a>
											<img src={bluearrow} alt="Blue arrow" />
										</div>
									</div>

									<div className="contact-message">
										<img src={messageicon} alt="Green message icon" />
										<h4 className="h4">Don't like phone calls?</h4>

										<div className="contact-us">
											<a href="" className="contact-us-green">
												Contact us
											</a>
											<img src={greenarrow} alt="Green arrow" />
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
