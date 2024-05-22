// import React from 'react'

import MenuCard from "../Reusable/MenuCard";
import { menuDetail } from "../constant";

const SpecialMenu = () => {
	return (
		<div className="flex flex-col  justify-center mx-[6%]">
			<h1 className="p-[50px] text-[32px] font-[600] ">
				Special menu
				<span className=" border-orange border-b-4 my-8 px-1">for you </span>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-12">
					{menuDetail.map((item) => (
						<MenuCard key={item.id} {...item} />
					))}
				</div>
			</h1>
		</div>
	);
};

export default SpecialMenu;
