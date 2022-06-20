import React from "react";
import ExerciseRow from "../ExerciseRow/ExerciseRow";
import LoadingExerciseRow from "../ExerciseRow/LoadingExerciseRow";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import requests from "../../../utils/requests";

const ExerciseList = () => {
	const [exercises, setExercises] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [pageNumber, setPageNumber] = useState(0);
	const [hasNext, setHasNext] = useState(0);
	const [hasPrevious, setHasPrevious] = useState(0);
	const perPage = 10;
	useEffect(() => {
		const url = "/api/v100/learning_object/";
		const config = {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		};
		requests
			.get(url, config)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
			})
			.then((data) => {
				let loadedData = [];
				for (let i = 0; i < data["learning_objects"].length; i += 2) {
					let learning_object = [data["learning_objects"][i]];
					if (i + 1 < data["learning_objects"].length) {
						learning_object.push(data["learning_objects"][i + 1]);
					}
					loadedData.push(learning_object);
				}
				setExercises(loadedData);
				setIsLoading(false);
				setPageNumber(data["page_number"]);
				setHasNext(data["has_next_page"]);
				setHasPrevious(pageNumber - 1 === 0);
				console.log(loadedData);
			});
	}, []);
	const content = isLoading ? (
		<>
			<LoadingExerciseRow />
			<LoadingExerciseRow /> <LoadingExerciseRow />
		</>
	) : (
		exercises.map((exercise) => <ExerciseRow exercises={exercise} />)
	);
	return (
		<>
			<Container>{content}</Container>
		</>
	);
};

export default ExerciseList;
