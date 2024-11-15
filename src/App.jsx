import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Account from './views/Account';
import Contact from './views/Contact';
import Features from './views/Features';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<BrowserRouter>
			<div className={isDarkMode ? 'dark-mode' : ''}>
				<Header onToggleDarkMode={toggleDarkMode} />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/Account/*" element={<Account isDarkMode={isDarkMode} />} />
						<Route path="/Contact" element={<Contact />} />
						<Route path="/Features" element={<Features />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
