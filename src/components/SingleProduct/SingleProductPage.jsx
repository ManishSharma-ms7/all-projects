import React from "react";

import "./SingleProductPage.css";

const product = {
	id: 1,
	title: "Product Title",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
	price: 9.99,
	images: [
		"https://via.placeholder.com/500x500?text=Product+Image+1",
		"https://via.placeholder.com/500x500?text=Product+Image+2",
		"https://via.placeholder.com/500x500?text=Product+Image+3",
		"https://via.placeholder.com/500x500?text=Product+Image+4",
	],
	stock: 10,
};

const SingleProductPage = () => {
	return (
		<section className="align_cener single_product">
			<div className="align_center">
				<div className="single_product_thumbnails">
					{product.images.map((image, index) => (
						<img src={image} alt={product.title} />
					))}
				</div>
				<img src={product.images[0]} alt={product.title} className="single_product_display" />
			</div>
			<div className="align_center single_product_details"></div>
		</section>
	);
};

export default SingleProductPage;
