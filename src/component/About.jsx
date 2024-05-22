import bgImage from "../assets/aboutbg.png";
import abt from "../assets/abtimg.png";
const About = () => {
	return (
		<div className="bg-hero h-full relative mt-[260px] mb-[130px]">
			<img
				src={bgImage}
				alt=""
				className="relative w-full h-[484px] object-cover"
			/>
			<img
				src={abt}
				alt=""
				className="lg:absolute md:hidden sm:hidden top-[-10%] left-[237.27px] h-[509px] w-[370px]"
			/>
			<div className="absolute top-[8%] left-[55%] w-[28%]">
				<h4 className="text-[32px] font-[600] my-2">
					About <span className=" border-orange border-b-4 my-8">us </span>
				</h4>
				<h2 className="text-[24px]">
					We provide quality coffee,
					<br /> and ready to deliver.
				</h2>
				<p className="my-2 leading-[2rem]">
					We are a company that makes and distributes delicious drinks. our main
					product is made with a secret recipe and available in stores
					worldwide.
				</p>

				<button className="bg-[#2F2105] text-[#F4AE26] px-[24px] py-[10px] rounded-full flex flex-row gap-2 items-center">
					More menu
				</button>
			</div>
		</div>
	);
};

export default About;
