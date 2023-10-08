import React from "react";
import Row from "react-bootstrap/Row";
import RecomendationExerciseCol from "../ExerciseCol/RecomendationExerciseCol";

const RecomendationExerciseRow = (props) => {
	const exercises = props.exercises;
	const xs = props.xs;
	const md = props.md;
	const registerSelectedOption = props.registerSelectedOption;
	return (
		<>
			<Row xs={xs} md={md} className="g-4" style={{ margin: "10px" }}>
				{exercises.map((exercise) => (
					<RecomendationExerciseCol
						title={exercise.title}
						description={exercise.description}
						uuid={exercise.uuid}
						date={exercise.created_at}
						categories={exercise.categories}
						modelUUID={exercise.modelUUID}
						registerSelectedOption={registerSelectedOption}
					/>
				))}
			</Row>
		</>
	);
};

export default RecomendationExerciseRow;
