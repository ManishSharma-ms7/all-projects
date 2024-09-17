import React from "react";

import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
	return (
		<div>
			<HeroSection
				title="Buy iPhone 20 Pro"
				subtitle="Experience the power of the latest iPhone 20 with our most Pro camera ever."
				link="/"
				image={iphone}
			/>
			<FeaturedProducts />
			<HeroSection
				title="Built the ultimate setup"
				subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini."
				link="/"
				image={mac}
			/>
		</div>
	);
};

export default HomePage;
