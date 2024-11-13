import React from 'react';

import { Page1 } from '../components/Page1/Page1';
import { Page2 } from '../components/Page2/Page2';
import { Page3 } from '../components/Page3/Page3';
import { Page4desktop } from '../components/Page4desktop/Page4desktop';
import { Page5desktop } from '../components/Page5desktop/Page5desktop';
import { Page4 } from '../components/Page4/Page4';

const Home = () => {
	return (
		<div>
			<Page1 />
			<Page2 />
			<Page3 />
			<Page4desktop />
			<Page5desktop />
			<Page4 />
		</div>
	);
};

export default Home;
