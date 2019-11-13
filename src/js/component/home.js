import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

let arr = [
	{
		src: "https://picsum.photos/id/1/500/325",
		title: "Card title 1"
	},
	{
		src: "https://picsum.photos/id/100/500/325",
		title: "Card title 2"
	},
	{
		src: "https://picsum.photos/id/1003/500/325",
		title: "Card title 3"
	},
	{
		src: "https://picsum.photos/id/1022/500/325",
		title: "Card title 4"
	}
];

//create your first component
export const Home = props => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex justify-content-between">
					{arr.map((item, index) => {
						return (
							<Card
								key={index}
								src={item.src}
								title={item.title}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
};
