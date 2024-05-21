import PropTypes from "prop-types";

const DeliveryCard = ({ src, title, description }) => {
	return (
		<div className="flex flex-col gap-3 justify-center items-center">
			<img src={src} alt="" className="h-[159px] w-[159px]" />
			<p className="font-[600] text-2xl ">{title}</p>
			<p className="font-[400] text-[18px]">{description}</p>
		</div>
	);
};
DeliveryCard.propTypes = {
	src: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};
export default DeliveryCard;
