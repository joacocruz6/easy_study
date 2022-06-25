import React from "react";
import { Button } from "react-bootstrap";

import "./NavigationItem.css";

const NavigationItem = (props) => {
	return (
		<>
			<Button
				className="navigation_button"
				href={props.link}
				style={props.style}
			>
				{" "}
				{props.text}{" "}
			</Button>
		</>
	);
};

export default NavigationItem;
