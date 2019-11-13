import React from "react";

//create your first component
export const Footer = props => {
	return (
		<nav
			className="navbar navbar-dark bg-dark mt-4 d-flex justify-content-center"
			style={{ height: "7rem" }}>
			<span className="navbar-text text-white">
				Copyright © Your Website 2019
			</span>
		</nav>
	);
};
