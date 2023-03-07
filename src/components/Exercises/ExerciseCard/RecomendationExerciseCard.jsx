import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./ExerciseCard.css";

const RecomendedExerciseCard = (props) => {
	const date = new Date(props.date).toDateString();
	const description = props.description;
	const title = props.title;
	const uuid = props.uuid;
	const categories = props.categories;
	const registerSelectedOption = props.registerSelectedOption;
	let badgesContent = [];
	for (let i = 0; i < Math.min(categories.length, 5); i++) {
		badgesContent.push(categories[i].name);
	}
	return (
		<>
			<Card className="ExerciseCard">
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text style={{ textAlign: "left" }}>
						{description}
					</Card.Text>
					<Card.Text style={{ textAlign: "left" }}>
						{badgesContent.map((content) => (
							<Badge style={{ margin: "2px" }} pill bg="dark">
								{" "}
								{content}
							</Badge>
						))}
					</Card.Text>
					<Button
						onClick={registerSelectedOption(uuid)}
						className="ExerciseButton"
						variant="primary"
						style={{ margin: "4px" }}
					>
						More details
					</Button>
				</Card.Body>
				<Card.Footer className="text-muted">{date}</Card.Footer>
			</Card>
		</>
	);
};

export default RecomendedExerciseCard;
