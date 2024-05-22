import { BiCart } from "react-icons/bi";
import logo from "../assets/logo_coffe.svg";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav className="flex flex-row items-center justify-between lg:justify-evenly gap-20 z-3">
			<img src={logo} alt="logo" />

			{/* Large screen */}
			<section className="hidden lg:flex flex-row gap-20 items-center">
				<article className="flex flex-row gap-20">
					<a href="/">About Us</a>
					<a href="/">Our products</a>
					<a href="/">Delivery</a>
				</article>
				<article className="flex flex-row gap-3 items-center">
					<div className="relative">
						<input
							type="text"
							placeholder="Cappuccino"
							className="relative border border-slate-50 bg-white rounded-full px-6 py-1 shadow-md focus:outline-none"
						/>
						<CiSearch className="absolute top-1  left-2 h-4 w-4" />
					</div>
					<BiCart className="h-6 w-6" />
				</article>
			</section>

			{/* Small screen */}
			<div
				className="lg:hidden inline-block cursor-pointer"
				onClick={toggleMenu}>
				{showMenu ? (
					<IoCloseCircleOutline className="h-4 w-4" />
				) : (
					<GiHamburgerMenu className="h-4 w-4" />
				)}
			</div>
			<ul
				className={
					showMenu
						? "flex flex-col justify-center p-12 fixed top-14 right-0 bg-slate-100 rounded-lg transition-all duration-500 shadow-md"
						: "hidden"
				}>
				<article className="flex flex-col gap-5">
					<a href="/">About Us</a>
					<a href="/">Our products</a>
					<a href="/">Delivery</a>
				</article>
			</ul>
		</nav>
	);
};

export default Navbar;
