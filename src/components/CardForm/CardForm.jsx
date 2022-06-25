import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import "./CardForm.css";

const CardForm = (props) => {
	const onSubmitHandler = props.onSubmit;
	const extraComponents = props.hasOwnProperty("extraComponents")
		? props.extraComponents
		: [];
	return (
		<>
			<Card className="card">
				<Card.Body>
					<Card.Title>{props.cardTitle}</Card.Title>
					<Form className="form" onSubmit={onSubmitHandler}>
						{props.inputs.map((input) => input)}
						{props.saveButton}
					</Form>
					{extraComponents.map((component) => component)}
				</Card.Body>
			</Card>
		</>
	);
};

export default CardForm;
