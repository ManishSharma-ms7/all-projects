import React from "react";

import "./ProductsList.css";
import ProductCard from "./ProductCard";
import useData from "../../hooks/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsList = () => {
	const { data: products, error, isLoading } = useData("/products");
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

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
				{isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
				{products &&
					products.map((product) => (
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
