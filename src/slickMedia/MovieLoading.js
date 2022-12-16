import Skeleton from 'react-loading-skeleton';

const MovieLoading = ({ count }) => {
	return Array(count)
		.fill(0)
		.map((_, i) => <Skeleton width="120px" height="120px" key={i} />);
};
export default MovieLoading;
