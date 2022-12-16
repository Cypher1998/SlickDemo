import { useEffect, useState } from 'react';

export const useFetchHook = (urlOne, urlTwo) => {
	const [loading, setLoading] = useState(false);
	const [categoryOne, setCategoryOne] = useState(null);
	const [categoryTwo, setCategoryTwo] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchData(urlOne, urlTwo);
	}, [urlOne, urlTwo]);

	const fetchData = async (urlOne, urlTwo) => {
		setLoading(true);
		try {
			const dataOne = await fetch(urlOne);
			const dataTwo = await fetch(urlTwo);
			const resOne = await dataOne.json();
			const resTwo = await dataTwo.json();
			setCategoryOne(resOne.Search);
			setCategoryTwo(resTwo.Search);
			setLoading(false);
		} catch (error) {
			setError('Failed to fetch movies.');
			setLoading(false);
		}
	};

	return { loading, categoryOne, categoryTwo, error };
};
