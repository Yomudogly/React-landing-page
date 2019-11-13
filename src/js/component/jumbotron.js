import React from "react";

//create your first component
export const Jumbotron = props => {
	return (
		<div className="jumbotron mt-4 mb-0">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
				ipsam, eligendi, in quo sunt possimus non incidunt odit vero
				aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
				numquam repellat.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
};
