import TestimonialCard from "../Reusable/TestimoniaalCard";
// import Slider from "react-slick";
import bgImage from "../assets/aboutbg.png";
import { TestimonialMenu } from "../constant";

const Testimonials = () => {
	// var settings = {
	// 	dots: false,
	// 	infinite: true,
	// 	autoplay: false,
	// 	speed: 500,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},

	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 3,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 760,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 2,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 640,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 	],
	// };
	return (
		<div className="relative md:mt-[10rem] md:mb-[50rem]">
			{/* <h1>testimonials</h1> */}
			<img
				src={bgImage}
				alt=""
				className="relative w-50% h-[484px] object-cover"
			/>
			<div className="absolute lg:top-[45%] top-[12%] left-[12%] lg:w-[60%]">
				<h1 className="text-[32px] font-[600]">What they say about us</h1>
				<p className="font-[400] text-[#7E7D7A] text-lg lg:w-[40%] leading-10">
					We always provide the best service and always maintain the quality of
					coffee
				</p>
			</div>
			<div className="absolute top-[15%] left-[100%] w-[60%] grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[4rem]">
				{/* <Slider {...settings} className="grid lg:grid-cols-3 "> */}
				{TestimonialMenu.map((item) => (
					<TestimonialCard key={item.id} {...item} />
				))}
				{/* </Slider> */}
			</div>
		</div>
	);
};

export default Testimonials;
