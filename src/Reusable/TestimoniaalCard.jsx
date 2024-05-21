import PropTypes from "prop-types";
const TestimonialCard = ({ src, text }) => {
	return (
		<div>
			<img src={src} alt="" />

			<div>
				<p>{text}</p>
			</div>
		</div>
	);
};
TestimonialCard.propTypes = {
	src: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
};
export default TestimonialCard;
