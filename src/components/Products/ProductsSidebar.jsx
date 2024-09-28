import React from "react";

import "./ProductsSidebar.css";
import useData from "../../hooks/useData.js";
import LinkWithIcon from "../Navbar/LinkWithIcon";

const ProductsSidebar = () => {
	const { data: categories, error } = useData("/products/categories");
	return (
		<aside className="products_sidebar">
			<h2>Category</h2>
			<div className="category_links">
				{error && <em className="form_error">{error}</em>}
				{categories &&
					categories.map((category) => (
						<LinkWithIcon title={category.toUpperCase()} link={`/products/category/${category}`} sidebar={true} />
					))}
			</div>
		</aside>
	);
};

export default ProductsSidebar;
