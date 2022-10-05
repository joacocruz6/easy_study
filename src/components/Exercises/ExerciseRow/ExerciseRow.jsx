import React from "react";
import Row from "react-bootstrap/Row";
import ExerciseCol from "../ExerciseCol/ExerciseCol";

const ExerciseRow = (props) => {
	const exercises = props.exercises;
	return (
		<>
			<Row xs={1} md={2} className="g-4" style={{ margin: "10px" }}>
				{exercises.map((exercise) => (
					<ExerciseCol
						title={exercise.title}
						description={exercise.description}
						uuid={exercise.uuid}
						date={exercise.created_at}
						categories={exercise.categories}
					/>
				))}
			</Row>
		</>
	);
};

export default ExerciseRow;
