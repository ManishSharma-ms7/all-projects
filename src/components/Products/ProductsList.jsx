import React, { useEffect, useState } from "react";
import apiClient from "../../utils/api-client";

import "./ProductsList.css";
import ProductCard from "./ProductCard";

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get("/products")
			.then((res) => {
				console.log(res);
				setProducts(res["data"]);
			})
			.catch((err) => setError(err.message));
	}, []);

	return (
		<section className="products_list_section">
			<header className="align_center products_list_header">
				<h2>Products</h2>
				<select name="sort" id="" className="products_sorting">
					<option value="">Relevance</option>
					<option value="price desc">Price HIGH to LOW</option>
					<option value="price asc">Price HIGH to LOW</option>
					<option value="rate desc">Rate HIGH to LOW</option>
					<option value="rate asc">Rate HIGH to LOW</option>
				</select>
			</header>

			<div className="products_list">
				{error && <em className="form_error">{error}</em>}
				{products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						image={product.image}
						rating={product.rating.rate}
						ratingCount={product.rating.count}
					/>
				))}
			</div>
		</section>
	);
};

export default ProductsList;
