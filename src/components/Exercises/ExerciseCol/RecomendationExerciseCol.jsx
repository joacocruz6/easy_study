import React from "react";
import Col from "react-bootstrap/Col";
import RecomendationExerciseCard from "../ExerciseCard/RecomendationExerciseCard.jsx";

const RecomendationExerciseCol = (props) => {
	const title = props.title;
	const description = props.description;
	const uuid = props.uuid;
	const date = props.date;
	const categories = props.categories;
	const registerSelectedOption = props.registerSelectedOption;
	return (
		<>
			<Col>
				<RecomendationExerciseCard
					description={description}
					title={title}
					uuid={uuid}
					date={date}
					categories={categories}
					registerSelectedOption={registerSelectedOption}
				/>
			</Col>
		</>
	);
};

export default RecomendationExerciseCol;
