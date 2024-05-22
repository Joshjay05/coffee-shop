import Navbar from "./Navbar";
import coffeepods from "../assets/bg_img_hero.png";
import topcoffee from "../assets/top_coffee.svg";
import coffee from "../assets/img-hero.png";
import cart from "../assets/cart.png";
import Floating from "./Floating";
const Hero = () => {
	return (
		<header className=" relative bg-bg-picture h-full w-full pt-4 pb-60  mb-[80px] ">
			<div className="relative z-10 px-3 my-2">
				<Navbar />
			</div>
			<img
				src={topcoffee}
				alt=""
				className="w-[70%] h-[40vh] lg:w-{559px} lg:h-[394px] absolute top-lg:[-34px] lg:left-[875px] left-[40%] top-[3%]"
			/>
			<section className="flex flex-row items-center justify-evenly my-16">
				<article className="flex flex-col gap-10 z-40 sm:ml-2">
					<h1 className="lg:text-4xl md:text-base leading-10">
						Enjoy your <span className="text-orange">coffee</span> <br />
						before your activity
					</h1>
					<p className="text-[18px] break-words lg:w-[65%] w-[90%]">
						Boost your productivity and build your <br /> mood with a glass of
						coffee in the morning
					</p>

					<div className="flex gap-2">
						<button className="bg-[#2F2105] text-white px-10 lg:py-2 rounded-full flex flex-row gap-2 items-center sm:h-6">
							order <img src={cart} alt="" />
						</button>
						<button className="text-orange text-bold px-10 py-2 rounded-full">
							more menu
						</button>
					</div>
				</article>

				<article className="z-40 sm:mr-5 ">
					<img
						src={coffee}
						alt=""
						className="lg:h-[50vh] lg:w-[40vw]  sm:h-full sm:max-w-[80px] sm:mb-12"
					/>
				</article>
			</section>

			<p className="text-[32px] leading-[48px] font-bold text-left lg:py-10 mx-32 sm:mx-8 sm:py-[60px] sm:my-8">
				Popular <span className=" border-orange border-b-4">Now</span>
			</p>
			<img
				src={coffeepods}
				alt=""
				className="h-[394px] w-[554px] absolute lg:top-[55.4%] sm:top-[49.9%] left-[28px] "
			/>
			<Floating />
		</header>
	);
};

export default Hero;
