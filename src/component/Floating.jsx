import CoffeCard from "../Reusable/CoffeCard";
import { coffeeDetail } from "../constant";
import background from "../assets/Rectangle.png";
const Floating = () => {
	return (
		<main className="relative ">
			<div className="absolute grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-[10%] md:mx-[4%] md:mt-[40px] z-20 ">
				{coffeeDetail.map((e) => (
					<CoffeCard
						key={e.id}
						title={e.title}
						src={e.src}
						num={e.num}
						ratings={e.ratings}
						icon={e.icon}
						options1={e.options1}
						options2={e.options2}
						src2={e.src2}
					/>
				))}
			</div>
			<img
				src={background}
				alt=""
				className="lg:absolute sm:hidden md:hidden z-10 left-16 top-[85px]"
			/>
		</main>
	);
};

export default Floating;
