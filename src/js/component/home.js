import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

//create your first component
export const Home = props => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Card />
			</div>
		</div>
	);
};
