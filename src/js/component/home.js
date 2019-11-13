import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

let arr = [
	{
		src: "https://picsum.photos/500/325",
		title: "Card title"
	},
	{
		src: "https://picsum.photos/500/325",
		title: "Card title"
	}
];

//create your first component
export const Home = props => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				{arr.map((item, index) => {
					return (
						<Card key={index} src={item.src} title={item.title} />
					);
				})}
			</div>
		</div>
	);
};
