import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter((x) => x);

	// Chat GPT
	const formatBreadcrumbName = (name) => {
		return name
			.replace(/([A-Z])/g, ' $1')
			.replace(/-/g, ' ')
			.replace(/^\w/, (c) => c.toUpperCase());
	};

	return (
		<section className="page-title">
			<div className="container">
				<h1 className="page-name">
					{pathnames.length > 0 ? formatBreadcrumbName(pathnames[pathnames.length - 1]) : 'Home'}
				</h1>
				<ul className="breadcrumb">
					<li>
						<Link to="/">Home</Link>
					</li>
					{pathnames.map((value, index) => {
						const to = `/${pathnames.slice(0, index + 1).join('/')}`;
						const isLast = index === pathnames.length - 1;

						return (
							<li key={to} className={isLast ? 'breadcrumb-item' : 'breadcrumb-item with-separator'}>
								{isLast ? (
									<span>{formatBreadcrumbName(value)}</span>
								) : (
									<Link to={to}>{formatBreadcrumbName(value)}</Link>
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
