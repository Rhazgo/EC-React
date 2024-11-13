// Taget från Hans lektion

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x);

	return (
		<section className="page-title">
			<div className="container">
				<h1 className="page-name">{pathnames[pathnames.length - 1].replace(/-/g, ' ') || 'Home'}</h1>
				<ul className="breadcrumb">
					<li>
						<Link to="/">Home</Link>
					</li>
					{pathnames.map((value, index) => {
						const to = `/${pathnames.slice(0, index + 1).join('/')}`;

						return (
							<li key={to}>
								{index === pathnames.length - 1 ? (
									<span>{value.replace(/-/g, ' ').charAt(0).toUpperCase() + value.slice(1)}</span>
								) : (
									<>
										<Link to={to}>{value.replace(/-/g, ' ').charAt(0).toUpperCase() + value.slice(1)}</Link>
										<span> / </span>
									</>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Breadcrumb;
