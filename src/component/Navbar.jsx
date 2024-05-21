import { BiCart } from "react-icons/bi";
import logo from "../assets/logo_coffe.svg";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
	return (
		<nav className="flex flex-row items-center justify-evenly gap-20 z-3 ">
			{/* <section className="flex flex-row gap-10 "> */}
			<img src={logo} alt="logo" />

			<section className="flex flex-row gap-20 items-center">
				<article className="flex flex-row gap-20">
					<a href="/">About Us</a>
					<a href="/">Our products</a>
					<a href="/">Delivery</a>
				</article>
				{/*  */}
				<article className="flex flex-row gap-3 items-center">
					<div className="relative">
						<input
							type="text"
							placeholder="Cappuccino"
							className="relative border border-slate-50 bg-white rounded-full px-6 py-1 shadow-md focus:outline-none"
						/>
						<CiSearch className="absolute top-1  left-2 h-4 w-4 " />
					</div>
					{/* <img src=} alt="" /> */}
					<BiCart className="h-6 w-6" />
				</article>
			</section>
			{/* </section>  */}
		</nav>
	);
};

export default Navbar;
