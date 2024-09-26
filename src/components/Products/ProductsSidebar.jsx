import React, { useState, useEffect } from "react";
import apiClient from "../../utils/api-client";

import "./ProductsSidebar.css";
import rocket from "../../assets/rocket.png";
import LinkWithIcon from "../Navbar/LinkWithIcon";

const ProductsSidebar = () => {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get("products/categories")
			.then((res) => {
				console.log(res);
				setCategories(res["data"]);
			})
			.catch((err) => setError(err.message));
	}, []);
	return (
		<aside className="products_sidebar">
			<h2>Category</h2>
			<div className="category_links">
				{categories.map((category) => (
					<LinkWithIcon title={category} link="products?category=electronics" sidebar={true} />
				))}
			</div>
		</aside>
	);
};

export default ProductsSidebar;
