import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";
import CartPage from "./components/Cart/CartPage";
import MyOrderPage from "./components/MyOrder/MyOrderPage";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<main>
				{/* <ProductsPage /> */}
				{/* <HomePage /> */}
				{/* <SingleProductPage /> */}
				{/* <CartPage /> */}
				<MyOrderPage />
			</main>
		</div>
	);
};

export default App;
