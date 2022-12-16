const MovieDisplay = ({ movie }) => {
	return (
		<div className="!h-[105px] !w-[100px] md:!h-[120px] md:!w-[115px] max-w-none rounded-md relative flex items-center justify-center">
			<img
				src={movie.Poster}
				alt={movie.Title}
				className="!h-[105px] !w-[100px] md:!h-[120px] md:!w-[115px] max-w-none rounded-md"
			/>
			<p className="absolute text-gray-200 font-bold text-center text-[11px]">
				{movie.Title}
			</p>
		</div>
	);
};
export default MovieDisplay;
