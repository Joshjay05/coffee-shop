import TestimonialCard from "../Reusable/TestimoniaalCard";
import bgImage from "../assets/aboutbg.png";
import { TestimonialMenu } from "../constant";

const Testimonials = () => {
	return (
		<div className="relative md:mt-[10rem] md:mb-[50rem]">
			{/* <h1>testimonials</h1> */}
			<img
				src={bgImage}
				alt=""
				className="relative w-50% h-[484px] object-cover"
			/>
			<div className="absolute lg:top-[35%] top-[12%] left-[12%] lg:w-[60%] ">
				<h1 className="text-[32px] font-[600]">What they say about us</h1>
				<p className="font-[400] text-[#7E7D7A] text-lg lg:w-[40%] leading-10">
					We always provide the best service and always maintain the quality of
					coffee
				</p>
			</div>
			<div className="absolute top-[15%] left-[40%] w-[60%] grid lg:grid-cols-3 md:grid-cols-3 lg:gap-[4rem] md:w-[90%] md:left-[3%] md:top-[33%] md-gap-[87px]">
				{TestimonialMenu.map((item) => (
					<TestimonialCard key={item.id} {...item} />
				))}
			</div>
		</div>
	);
};

export default Testimonials;
