import { useFetchHook } from './useFetchHook';
import Skeleton from 'react-loading-skeleton';
import MovieLoading from './MovieLoading';
import MovieDisplay from '../MovieDisplay';

const MovieContainer = ({ text }) => {
	const { loading, categoryOne, categoryTwo, error } = useFetchHook(
		`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_IMDB_KEY}&s=action`,
		`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_IMDB_KEY}&s=comedy`
	);

	const newCategoryOne = categoryOne?.filter((movie) =>
		movie.Title.includes(text)
	);

	const newCategoryTwo = categoryTwo?.filter((movie) =>
		movie.Title.includes(text)
	);

	return (
		<div className="w-full max-w-[1440px] px-6 md:px-8 lg:px-12 mb-12">
			{error ? (
				<p className="text-red-500 font-medium">
					{error}{' '}
					<span
						onClick={() => window.location.reload()}
						className="cursor-pointer"
					>
						Reload!!!
					</span>
				</p>
			) : (
				<div className="space-y-4">
					<div className="space-y-2">
						<p className="font-medium text-[15px]">
							{loading ? (
								<Skeleton className="!w-[120px] !h-[18px]" />
							) : (
								'Action'
							)}
						</p>
						<div className="movieBg flex gap-3 overflow-scroll">
							{loading ? (
								<MovieLoading count={10} />
							) : newCategoryOne && newCategoryOne.length ? (
								newCategoryOne?.map((movie) => (
									<MovieDisplay movie={movie} key={movie.imdbID} />
								))
							) : (
								<NoMatchMovies />
							)}
						</div>
					</div>
					<div className="space-y-2">
						<p className="font-medium text-sm">
							{loading ? (
								<Skeleton className="!w-[120px] !h-[18px]" />
							) : (
								'Comedy'
							)}
						</p>
						<div className="movieBg flex gap-3 overflow-scroll">
							{loading ? (
								<MovieLoading count={10} />
							) : newCategoryTwo && newCategoryTwo.length ? (
								newCategoryTwo?.map((movie) => (
									<MovieDisplay movie={movie} key={movie.imdbID} />
								))
							) : (
								<NoMatchMovies />
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default MovieContainer;

const NoMatchMovies = () => (
	<p className="font-medium text-[14.5px] text-red-500">No match found!</p>
);
