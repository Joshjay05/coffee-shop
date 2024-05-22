import coffee from "../assets/coffeemachine.png";

const Footer = () => {
	return (
		<footer className="flex justify-center items-center my-[6rem] relative ">
			<img src={coffee} alt="" className=" my-[10rem]" />
			<article className="flex flex-col gap-3 absolute top-[40%]">
				<p className="text-[32px] font-[600] text-white">
					Subscribe to get 50% discount price
				</p>
				<div className="relative flex justify-center">
					<input
						type="text"
						placeholder="Email address"
						className=" relative border border-slate-50 bg-white rounded-full w-[35vw] px-12 py-3 shadow-md focus:outline-none "
					/>
					<button className="absolute bg-[#2F2105] text-white  top-[8%] right-[8%] px-4 py-2 rounded-full ">
						Order now
					</button>
				</div>
				{/* <div className="bg-[#f863634d]  w-full absolute top-[-3%] h-[40vh]"></div> */}
			</article>
		</footer>
	);
};

export default Footer;
