import React from "react";
import Row from "react-bootstrap/Row";
import LoadingExerciseCol from "../ExerciseCol/LoadingExerciseCol";

const LoadingExerciseRow = () => {
	return (
		<>
			<Row xs={1} md={2} className="g-4" style={{ margin: "10px" }}>
				<LoadingExerciseCol />
				<LoadingExerciseCol />
			</Row>
		</>
	);
};

export default LoadingExerciseRow;
