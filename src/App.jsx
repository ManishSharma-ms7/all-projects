import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<HomePage />
			<main></main>
		</div>
	);
};

export default App;
