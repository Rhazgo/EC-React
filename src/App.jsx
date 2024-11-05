import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Page1 } from './components/Page1/Page1';
import { Page2 } from './components/Page2/Page2';
import { Page3 } from './components/Page3/Page3';
import { Page4desktop } from './components/Page4desktop/Page4desktop';
import { Page5desktop } from './components/Page5desktop/Page5desktop';
import { Page4 } from './components/Page4/Page4';
import { Footer } from './components/Footer/Footer';

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		

		setIsDarkMode(!isDarkMode);
	};

	return (
		<div className={isDarkMode ? 'dark-mode' : ''}>
			<Header onToggleDarkMode={toggleDarkMode} />
			<Page1 />
			<Page2 />
			<Page3 />
			<Page4desktop />
			<Page5desktop />
			<Page4 />
			<Footer />
		</div>
	);
};

export default App;
