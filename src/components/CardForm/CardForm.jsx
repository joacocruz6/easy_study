import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import "./CardForm.css";

const CardForm = (props) => {
	const extraComponents = props.hasOwnProperty("extraComponents")
		? props.extraComponents
		: [];
	return (
		<>
			<Card className="card">
				<Card.Body>
					<Card.Title>{props.cardTitle}</Card.Title>
					<Form className="form">
						{props.inputs.map((input) => input)}
					</Form>
					{props.saveButton}
					{extraComponents.map((component) => component)}
				</Card.Body>
			</Card>
		</>
	);
};

export default CardForm;
