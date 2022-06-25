import React from "react";
import Col from "react-bootstrap/Col";
import ExerciseCard from "../ExerciseCard/ExerciseCard.jsx";

const ExerciseCol = (props) => {
	const title = props.title;
	const description = props.description;
	const uuid = props.uuid;

	return (
		<>
			<Col>
				<ExerciseCard
					description={description}
					title={title}
					uuid={uuid}
				/>
			</Col>
		</>
	);
};

export default ExerciseCol;
