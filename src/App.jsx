import About from "./component/About";
import Delivery from "./component/Delivery";
import Hero from "./component/Hero";
import SpecialMenu from "./component/SpecialMenu";
import Footer from "./component/Footer";
import Testimonials from "./component/Testimonial";

function App() {
	return (
		<main>
			<Hero />
			<Delivery />
			<About />
			<SpecialMenu />
			<Testimonials />

			<Footer />
		</main>
	);
}

export default App;
