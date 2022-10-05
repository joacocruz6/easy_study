import React from "react";
import Col from "react-bootstrap/Col";
import ExerciseCard from "../ExerciseCard/ExerciseCard.jsx";

const ExerciseCol = (props) => {
	const title = props.title;
	const description = props.description;
	const uuid = props.uuid;
	const date = props.date;
	const categories = props.categories;
	return (
		<>
			<Col>
				<ExerciseCard
					description={description}
					title={title}
					uuid={uuid}
					date={date}
					categories={categories}
				/>
			</Col>
		</>
	);
};

export default ExerciseCol;
