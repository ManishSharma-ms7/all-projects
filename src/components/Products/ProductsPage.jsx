import React from "react";
import ProductsSidebar from "./ProductsSidebar";

import "./ProductsPage.css";

const ProductsPage = () => {
	return (
		<section className="products_page">
			<ProductsSidebar />
			<section className="products_list_section">Product List</section>
		</section>
	);
};

export default ProductsPage;
