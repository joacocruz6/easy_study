import React from "react";
import ExerciseRow from "../ExerciseRow/ExerciseRow";
import Container from "react-bootstrap/Container";

const ExerciseList = () => {
	return (
		<>
			<Container>
				<ExerciseRow />
				<ExerciseRow />
				<ExerciseRow />
			</Container>
		</>
	);
};

export default ExerciseList;
