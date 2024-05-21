/* eslint-disable react/jsx-no-undef */
import DeliveryCard from "../Reusable/DeliveryCard";
import { deliveryMenu } from "../constant";

const Delivery = () => {
	return (
		<div className="flex flex-col gap-10 justify-center mt-[18rem] mx-[10%]">
			<h1 className="text-[32px] font-[600]">
				How to use delivery{" "}
				<span className=" border-orange border-b-4 my-8">service</span>
			</h1>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
				{deliveryMenu.map((delivery) => (
					<DeliveryCard key={delivery.id} {...delivery} />
					// <DeliveryCard key={delivery.id} {...delivery} />
				))}
			</div>
		</div>
	);
};

export default Delivery;
