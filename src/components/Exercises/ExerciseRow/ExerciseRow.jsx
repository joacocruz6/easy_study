import React from "react";
import Row from "react-bootstrap/Row";
import ExerciseCol from "../ExerciseCol/ExerciseCol";

const ExerciseRow = () => {
	return (
		<>
			<Row xs={1} md={2} className="g-4" style={{ margin: "10px" }}>
				<ExerciseCol />
				<ExerciseCol />
			</Row>
		</>
	);
};

export default ExerciseRow;
