import PropTypes from "prop-types";
const TestimonialCard = ({ src, text, title }) => {
	return (
		<div>
			<img src={src} alt="" className=" relative w-[256px] h-[280px]" />

			<div className="grid gap-3 ml-6 absolute right[50%] top-[61%]  left-[] bg-[#FFCB7C] max-w-[16vw] max-h-[38%] p-[10px] rounded-lg ">
				<p className="text-lg font-[600] w-[10%]">{title}</p>
				<p className="text-[#2F2105] text-[14px] leading-[21px] font-[400]">
					{text}
				</p>
			</div>
			<div className="w-[28.8%] h-[41%] bg-[#ffa81c55] rounded-md absolute ml-[39px] top-[58%] "></div>
		</div>
	);
};
TestimonialCard.propTypes = {
	src: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
export default TestimonialCard;
