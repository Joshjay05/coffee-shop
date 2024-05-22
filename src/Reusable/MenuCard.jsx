import PropTypes from "prop-types";

const MenuCard = ({ src, title, ratings, desc, src2, icon: Icon, num }) => {
	return (
		<section className="border bg-white border-slate-100 rounded-md shadow flex flex-col  py-[14px]">
			<article className="relative  py-4 px-4">
				<img
					src={src}
					alt=""
					className="relative h-[228px] w-[322px] rounded-xl"
				/>
				<p className="absolute bg-white border border-slate-50 flex flex-row gap-1 top-8 left-8 shadow-md rounded-full px-1">
					{ratings && (
						<span className="flex items-center text-lg">{ratings}</span>
					)}
					{Icon && (
						<span className="flex items-center text-lg">
							<Icon className="text-yellow " />
						</span>
					)}
				</p>
				<div className="w-[21.8%] md:w-[23%] sm:[23%] h-[13%] bg-[#ffffff34] rounded-xl absolute ml-[4px] top-[10%] "></div>
			</article>
			<article className="flex flex-col mx-[8%] gap-3">
				<div className="flex flex-row justify-between items-center">
					<p className="font-[600] text-[24px]">{title}</p> <p>{num}</p>
				</div>
				<div className="flex flex-row justify-between items-center">
					<p className="text-[14px] text-[#7E7D7A] w-[50%] font-[600]">
						{desc}
					</p>
					<img src={src2} alt="" className="h-6 w-6 bg-orange rounded-full" />
				</div>
			</article>
		</section>
	);
};
MenuCard.propTypes = {
	src: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	ratings: PropTypes.number.isRequired,
	src2: PropTypes.object.isRequired,
	icon: PropTypes.object.isRequired,
	num: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired,
};
export default MenuCard;
