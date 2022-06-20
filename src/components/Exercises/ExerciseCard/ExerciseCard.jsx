import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ExerciseCard.css";

const ExerciseCard = (props) => {
	const description = props.description;
	const title = props.title;
	const uuid = props.uuid;
	const buttonHref = `/exercises/${uuid}`;
	return (
		<>
			<Card className="ExerciseCard">
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text style={{ "text-align": "left" }}>
						{description}
					</Card.Text>
					<Button
						href={buttonHref}
						className="ExerciseButton"
						variant="primary"
						style={{ margin: "4px" }}
					>
						Check on web
					</Button>
					<Button className="ExerciseButton" variant="success">
						Download
					</Button>
				</Card.Body>
				<Card.Footer className="text-muted">2 days ago</Card.Footer>
			</Card>
		</>
	);
};

export default ExerciseCard;
