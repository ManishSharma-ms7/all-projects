import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/Products/ProductsPage";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<main>
				<ProductsPage />
				{/* <HomePage /> */}
			</main>
		</div>
	);
};

export default App;
