import Navbar from "./Navbar";
import coffeepods from "../assets/bg_img_hero.png";
import topcoffee from "../assets/top_coffee.svg";
import coffee from "../assets/img-hero.png";
import cart from "../assets/cart.png";
const Hero = () => {
	return (
		<header className=" relative bg-bg-picture h-full w-full pt-4 pb-60  ">
			<div className="relative z-10 px-3 my-2">
				<Navbar />
			</div>
			<img
				src={topcoffee}
				alt=""
				className=" w-{559px} h-[394px] absolute top-[-34px] left-[875px]"
			/>
			<section className="flex flex-row items-center justify-evenly my-16">
				<article className="flex flex-col gap-10">
					<h1 className="lg:text-4xl md:text-base sm:text-xs leading-10">
						Enjoy your <span>coffee</span> <br />
						before your activity
					</h1>
					<p className="text-[18px] break-words w-[65%]">
						Boost your productivity and build your <br /> mood with a glass of
						coffee in the morning
					</p>

					<div className="flex gap-3">
						<button className="bg-[#2F2105] text-white px-10 py-2 rounded-full flex flex-row gap-2 items-center">
							order <img src={cart} alt="" />
						</button>
						<button className="text-orange text-bold text-white px-10 py-2 rounded-full">
							more menu
						</button>
					</div>
				</article>

				<article className="z-40">
					<img src={coffee} alt="" className="h-[50vh] w-[40vw] " />
				</article>
			</section>

			<p className="text-[32px] leading-[48px] font-bold text-left py-10 mx-32">
				Popular <span className=" border-orange border-b-4">Now</span>
			</p>
			<img
				src={coffeepods}
				alt=""
				className="h-[394px] w-[5554px absolute top-[56%] left-[28px] "
			/>
		</header>
	);
};

export default Hero;
