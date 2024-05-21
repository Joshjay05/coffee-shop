import { BiStar } from "react-icons/bi";
import Vanilla from "../assets/vanilla.png";
import cart from "../assets/cart.png";
import hazelnut from "../assets/hazelnutlatte.png";
import espresso from "../assets/espresso.png";
import coffeetouch from "../assets/image.png";
import lorry from "../assets/foodtruck.png";
import coffee from "../assets/coffeecup.png";
import sandwich from "../assets/sandwich.png";
import waffle from "../assets/waffle.png";
import icecream from "../assets/icecream.png";
import moccacinno from "../assets/moccacino.png";
import cappuccino from "../assets/cappuccino.png";
import milk from "../assets/hotmilk.png";
import John from "../assets/John.png";
import Naura from "../assets/Naura.png";
import Azura from "../assets/Azura.png";

export const coffeeDetail = [
	{
		id: 1,
		title: "Vanilla Latte",
		src: Vanilla,
		num: "21k",
		ratings: 4.8,
		icon: BiStar,
		options1: "hot",
		options2: "cold",
		src2: cart,
	},
	{
		id: 1,
		title: "Espresso",
		src: espresso,
		num: "12k",
		ratings: 4.8,
		icon: BiStar,
		options1: "hot",
		options2: "cold",
		src2: cart,
	},
	{
		id: 1,
		title: "Hazelnut Latte",
		src: hazelnut,
		num: "23k",
		ratings: 4.8,
		icon: BiStar,
		options1: "hot",
		options2: "cold",
		src2: cart,
	},
];

export const menuDetail = [
	{
		id: 1,
		title: "Sandwich",
		src: sandwich,
		num: "12k",
		ratings: 4.8,
		icon: BiStar,
		desc: "bread with meat and vegetables",
		src2: cart,
	},
	{
		id: 2,
		title: "Hot Milk",
		src: milk,
		num: "12k",
		ratings: 4.8,
		icon: BiStar,
		desc: "Hot Milk with less sugar",
		src2: cart,
	},
	{
		id: 3,
		title: "Coffee Ice Cream",
		src: icecream,
		num: "12k",
		ratings: 4.8,
		icon: BiStar,
		desc: "Coffee with ice cream vanilla",
		src2: cart,
	},
	{
		id: 1,
		title: "Cappuccino",
		src: cappuccino,
		num: "12k",
		ratings: 4.8,
		icon: BiStar,
		desc: "Hot Cappuccino",
		src2: cart,
	},
	{
		id: 5,
		title: "Moccacinno",
		src: moccacinno,
		num: "12k",
		ratings: 4.8,
		icon: BiStar,
		desc: "Hot Moccacinno",
		src2: cart,
	},
	{
		id: 6,
		title: "Waffle Ice Cream",
		src: waffle,
		num: "12k",
		ratings: 4.8,
		icon: BiStar,
		desc: "Waffle with Ice cream",
		src2: cart,
	},
];

export const deliveryMenu = [
	{
		id: 1,
		src: coffeetouch,
		title: "choose your coffee",
		description: "there are 20+ coffees for you",
	},

	{
		id: 2,
		src: lorry,
		title: "we delivery it to you",
		description: "Choose delivery service",
	},

	{
		id: 3,
		src: coffee,
		title: "Enjoy your coffee",
		description: "Choose delivery service",
	},
];

export const TestimonialMenu = [
	{
		id: 1,
		src: Naura,
		title: "Naura",
		text: "I really love the cappuccino, the coffee was very smooth",
	},

	{
		id: 2,
		src: John,
		title: "John",
		text: "this coffee shop is very convenient",
	},

	{
		id: 3,
		src: Azura,
		title: "Azura",
		text: "the coffee menu here is very much",
	},
];
