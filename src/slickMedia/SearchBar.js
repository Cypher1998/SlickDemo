const SearchBar = ({ text, setText }) => {
	return (
		<div className="my-6">
			<div className="w-full max-w-[1440px] px-6 md:px-8 lg:px-12 space-y-1">
				<p className="text-sm">Search</p>
				<input
					type="text"
					className="w-full border rounded-sm outline-none py-1.5 md:py-2 px-4 text-[14px] placeholder:text-gray-300 placeholder:text-xs"
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="enter a movie to search..."
				/>
			</div>
		</div>
	);
};
export default SearchBar;
