import Background from './Background';
import MovieContainer from './MovieContainer';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import './slickmedia.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useState } from 'react';

const LandingPage = () => {
	const [text, setText] = useState('');

	return (
		<SkeletonTheme>
			<Navbar />
			<Background />
			<SearchBar text={text} setText={setText} />
			<MovieContainer text={text} />
		</SkeletonTheme>
	);
};
export default LandingPage;
