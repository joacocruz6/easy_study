import React from "react";
import ExerciseRow from "../ExerciseRow/ExerciseRow";
import LoadingExerciseRow from "../ExerciseRow/LoadingExerciseRow";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import requests from "../../../utils/requests";
import { ButtonGroup, Button } from "react-bootstrap";

const ExerciseList = (props) => {
	const endpoint = props.endpoint;
	const [exercises, setExercises] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [pageNumber, setPageNumber] = useState(1);
	const [hasNext, setHasNext] = useState(false);
	const [hasPrevious, setHasPrevious] = useState(false);

	const loadExercisesData = (page_number = pageNumber) => {
		const searchParams = new URLSearchParams({ page_number: page_number });
		const url = endpoint + "?" + searchParams.toString();
		const config = {
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
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
				console.log(data);
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
				setHasPrevious(data["page_number"] - 1 !== 0);
			});
	};
	const previousButton = hasPrevious ? (
		<Button
			variant="outline-primary"
			onClick={() => {
				setIsLoading(true);
				loadExercisesData(pageNumber - 1);
			}}
		>
			Previous
		</Button>
	) : (
		<Button variant="outline-primary" disabled>
			{" "}
			Previous
		</Button>
	);
	const nextButton = hasNext ? (
		<Button
			variant="outline-primary"
			onClick={() => {
				setIsLoading(true);
				loadExercisesData(pageNumber + 1);
			}}
		>
			{" "}
			Next{" "}
		</Button>
	) : (
		<Button variant="outline-primary" disabled>
			{" "}
			Next{" "}
		</Button>
	);
	const buttons = (
		<ButtonGroup className="mb-2">
			{previousButton}
			{nextButton}
		</ButtonGroup>
	);

	useEffect(loadExercisesData, []);
	const content = isLoading ? (
		<>
			<LoadingExerciseRow />
			<LoadingExerciseRow />
			<LoadingExerciseRow />
		</>
	) : (
		exercises.map((exercise) => <ExerciseRow exercises={exercise} />)
	);
	return (
		<>
			<Container>
				{content}
				{buttons}
			</Container>
		</>
	);
};

export default ExerciseList;
