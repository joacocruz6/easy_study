import React from "react";
import Row from "react-bootstrap/Row";
import ExerciseCol from "../ExerciseCol/ExerciseCol";

const ExerciseRow = () => {
	return (
		<>
			<Row xs={2} md={3} className="g-4" style={{ margin: "10px" }}>
				<ExerciseCol />
				<ExerciseCol />
				<ExerciseCol />
			</Row>
		</>
	);
};

export default ExerciseRow;
