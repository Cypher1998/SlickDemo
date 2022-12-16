const Navbar = () => {
	return (
		<nav className="fixed w-full h-[65px] md:h-[75px] lg:h-[80px] flex items-center bg-[#292929]">
			<div className="w-full max-w-[1440px] px-6 md:px-8 lg:px-12 flex items-center justify-center lg:justify-start">
				<h1 className="text-white border border-white p-1.5">MyTextApp</h1>
			</div>
		</nav>
	);
};
export default Navbar;
