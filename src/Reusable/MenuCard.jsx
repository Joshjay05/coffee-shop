import PropTypes from "prop-types";

const MenuCard = ({ src, title, ratings, desc, src2, icon, num }) => {
	return (
		<section className="border border-slate-100 rounded-md shadow ">
			<article className="relative">
				<img src={src} alt="" className="relative" />
				<p className="absolute">
					{num}
					{icon}
				</p>
			</article>
			<article className="flex flex-col gap-3">
				<div className="flex flex-row justify-between">
					<p>{title}</p> <p>{ratings}</p>
				</div>
				<div className="flex flex-row justify-between">
					<p>{desc}</p>

					<img src={src2} alt="" />
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
