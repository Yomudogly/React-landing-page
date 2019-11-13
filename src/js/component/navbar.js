import React from "react";

//create your first component
export const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<a className="nav-item nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link" href="#">
							About
						</a>
						<a className="nav-item nav-link" href="#">
							Services
						</a>
						<a className="nav-item nav-link" href="#">
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
