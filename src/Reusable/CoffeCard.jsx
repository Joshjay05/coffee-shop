import PropTypes from "prop-types";
// import mainBackground from "../assets/espresso.png";
const CoffeCard = ({
	src,
	title,
	ratings,
	options1,
	options2,
	src2,
	icon: Icon,
	num,
}) => {
	return (
		<section className="border bg-white border-slate-100 rounded-md shadow flex flex-col justify-center items-center  py-4">
			<article className="relative py-4 px-4 ">
				<img
					src={src}
					alt=""
					className="relative h-[226px] w-[307px] rounded-xl"
				/>
				<p className="absolute bg-white border border-slate-50 flex flex-row gap-1 top-8 left-8 shadow-md rounded-full px-1">
					{ratings && <span className="flex items-center">{ratings}</span>}
					{Icon && (
						<span className="flex items-center">
							<Icon className="text-yellow" />
						</span>
					)}
				</p>
				<div className="w-[20.8%] md:w-[34%] sm:w-[25%] h-[13%] bg-[#ffffff34] rounded-xl absolute ml-[4px] top-[10%] "></div>
			</article>
			<article className="flex flex-col gap-3">
				<div className="flex flex-row lg:justify-between sm:gap-[100px]">
					<span>{title}</span> <span>{num}</span>
				</div>
				<div className="flex flex-row justify-between md:gap-[20px] sm:gap-[14px]">
					<div className="flex flex-row md:gap-[20px] sm:gap-[14px]">
						<span className="border border-yellow rounded-md px-2  shadow-white ">
							{options1}
						</span>{" "}
						<span className="border border-yellow shadow-white rounded-md px-2">
							{options2}
						</span>
					</div>

					<img src={src2} alt="" />
				</div>
			</article>
		</section>
	);
};
CoffeCard.propTypes = {
	src: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	ratings: PropTypes.number.isRequired,
	options1: PropTypes.string.isRequired,
	options2: PropTypes.string.isRequired,
	src2: PropTypes.object.isRequired,
	icon: PropTypes.elementType,
	num: PropTypes.number.isRequired,
};
export default CoffeCard;
