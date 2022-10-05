import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import requests from "../../../utils/requests";
import "./ExerciseCard.css";

const ExerciseCard = (props) => {
	const date = new Date(props.date).toDateString();
	const description = props.description;
	const title = props.title;
	const uuid = props.uuid;
	const categories = props.categories;
	let badgesContent = [];
	for (let i = 0; i < Math.min(categories.length, 3); i++) {
		badgesContent.push(categories[i].name);
	}

	const buttonOnClick = () => {
		const buttonHref = `/exercises/${uuid}`;
		const selectURL = `/api/v100/learning_object/${uuid}/select/`;
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		const data = {};
		requests
			.post(selectURL, config, data)
			.then((response) => (document.location.href = buttonHref));
	};
	const buttonHref = `/exercises/${uuid}`;
	return (
		<>
			<Card className="ExerciseCard">
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text style={{ textAlign: "left" }}>
						{description}
					</Card.Text>

					<Button
						href={buttonHref}
						className="ExerciseButton"
						variant="primary"
						style={{ margin: "4px" }}
					>
						Check the content!
					</Button>
				</Card.Body>
				<Card.Footer className="text-muted">{date}</Card.Footer>
			</Card>
		</>
	);
};

export default ExerciseCard;
