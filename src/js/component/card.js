import React from "react";
import PropType from "prop-types";

//create your first component
export const Card = props => {
	return (
		<div className="card text-center" style={{ width: "15rem" }}>
			<img src={props.src} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropType.string,
	src: PropType.string
};
