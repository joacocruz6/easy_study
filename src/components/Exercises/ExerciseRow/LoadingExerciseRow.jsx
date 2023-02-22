import React from "react";
import Row from "react-bootstrap/Row";
import LoadingExerciseCol from "../ExerciseCol/LoadingExerciseCol";

const LoadingExerciseRow = (props) => {
	const xs = props.xs;
	const md = props.md;
	return (
		<>
			<Row xs={xs} md={md} className="g-4" style={{ margin: "10px" }}>
				<LoadingExerciseCol />
				<LoadingExerciseCol />
			</Row>
		</>
	);
};

export default LoadingExerciseRow;
