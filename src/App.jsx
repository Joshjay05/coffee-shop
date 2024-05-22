import About from "./component/About";
import Delivery from "./component/Delivery";
import Hero from "./component/Hero";
import SpecialMenu from "./component/SpecialMenu";
import Testimonials from "./component/testimonials";
import Footer from "./component/Footer";

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
