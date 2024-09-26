import React from "react";
import "./Navbar.css";

import rocket from "../../assets/rocket.png";
import star from "../../assets/glowing-star.png";
import idButton from "../../assets/id-button.png";
import memo from "../../assets/memo.png";
import order from "../../assets/package.png";
import lock from "../../assets/locked.png";
import LinkWithIcon from "./LinkWithIcon";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="align_center navbar">
			<div className="align_center">
				<h1 className="navbar_heading">CartWish</h1>
				<form className="align_center navbar_form">
					<input type="text" className="navbar_search" placeholder="Search Products"></input>
					<button type="submit" className="search_button">
						Search
					</button>
				</form>
			</div>
			<div className="align_center navbar_links">
				<LinkWithIcon title="Home" emoji={rocket} link="/" />
				<LinkWithIcon title="Products" emoji={star} link="/products" />
				<LinkWithIcon title="LogIn" emoji={idButton} link="/login" />
				<LinkWithIcon title="SignUp" emoji={memo} link="/signup" />
				<LinkWithIcon title="My Orders" emoji={order} link="/myorders" />
				<LinkWithIcon title="Logout" emoji={lock} link="/logout" />
				<NavLink to="/cart" className="align_center">
					Cart <p className="align_center cart_counts">0</p>
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
