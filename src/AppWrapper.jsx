import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function AppWrapper() {
	return (
		<main>
			<aside>
				<Link to="/home">Home</Link>
				<Link to="/home/careers">Careers</Link>
				<Link to="/home/testimonials">Testimonials</Link>
			</aside>
			<section>
				<Outlet />
			</section>
		</main>
	);
}

export default AppWrapper;
