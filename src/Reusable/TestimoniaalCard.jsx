import PropTypes from "prop-types";
const TestimonialCard = ({ src, text, title }) => {
	return (
		<div>
			<img src={src} alt="" className=" relative w-[256px] h-[280px]" />

			<div className="grid gap-3 ml-6 absolute right[50%] top-[61%]  md:ml-2 bg-[#FFCB7C] lg:max-w-[16vw] h-[38%] md:max-w-[25vw] p-[10px] md:p-[4px] rounded-lg  z-40 sm:max-w-[30%] sm:h-[65%] sm:ml-[17px]">
				<p className="text-lg font-[600] w-[10%]">{title}</p>
				<p className="text-[#2F2105] text-[14px] leading-[21px] font-[400]">
					{text}
				</p>
			</div>
			<div className="w-[28.8%] md:w-[30%] h-[44%] bg-[#ffa81c55] rounded-md absolute ml-[39px] md:ml-[5px] top-[58%] sm:h-[65%] sm:w-[60%] "></div>
		</div>
	);
};
TestimonialCard.propTypes = {
	src: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
export default TestimonialCard;
