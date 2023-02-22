import React from "react";
import { useState, useEffect } from "react";
import ExerciseRow from "../ExerciseRow/ExerciseRow";
import "./Recomendation.css";
import requests from "../../../utils/requests";

const exercises = [
	{
		title: "Title 1",
		description: "Generic description 1",
		uuid: "3ae47c65-fec9-463e-857c-c080377e6a6e",
		date: "2012-04-23T18:25:43.511Z",
		categories: [
			{
				uuid: "f50fda18-2a0e-41de-8746-d614c68dbb4c",
				created_at: "2020-01-01T00:00:00Z",
				name: "Cat 1",
			},
			{
				uuid: "ddfa2f41-7559-4315-8eae-6ba76b6f74f9",
				created_at: "2020-01-01T00:00:00Z",
				name: "Cat 2",
			},
		],
	},
	{
		title: "Title 2",
		description: "Generic description 2",
		uuid: "51dcd9d6-c207-4a6d-b9bc-6e5cf0aa7f03",
		date: "2012-04-23T18:25:43.511Z",
		categories: [
			{
				uuid: "f50fda18-2a0e-41de-8746-d614c68dbb4c",
				created_at: "2020-01-01T00:00:00Z",
				name: "Cat 1",
			},
			{
				uuid: "1a98fe0e-c3d7-485f-8aa2-fd478db05427",
				created_at: "2020-01-01T00:00:00Z",
				name: "Cat 5",
			},
		],
	},
	{
		title: "Title 3",
		description: "Generic description 3",
		uuid: "64e2545a-0267-4e31-96e9-34ea08d6f7fe",
		date: "2012-04-23T18:25:43.511Z",
		categories: [
			{
				uuid: "f50fda18-2a0e-41de-8746-d614c68dbb4c",
				created_at: "2020-01-01T00:00:00Z",
				name: "Cat 1",
			},
			{
				uuid: "9c4b98e7-2302-44bb-a3ee-453857e135e5",
				created_at: "2020-01-01T00:00:00Z",
				name: "Cat 4",
			},
		],
	},
	{
		title: "Title 7",
		description: "Generic description 1",
		uuid: "f384cafc-5c6e-499e-82b6-3d3ff3c2a28a",
		date: "2012-04-23T18:25:43.511Z",
		categories: [
			{
				uuid: "f50fda18-2a0e-41de-8746-d614c68dbb4c",
				created_at: "2020-01-01T00:00:00Z",
				name: "Cat 1",
			},
			{
				uuid: "68d9c3b5-89dd-4862-8c07-f02d80d35b13",
				created_at: "2020-01-01T00:00:00Z",
				name: "Cat 8",
			},
		],
	},
];

const recomendersPaths = [
	"/api/v100/recomend/v0/",
	"/api/v100/recomend/v1/",
	"/api/v100/recomend/v2/",
	"/api/v100/recomend/v3/",
];

const RecomendationBox = () => {
	const [recomendedExercises, setRecomendedExercises] = useState([]);

	const loadRecomendations = () => {
		const config = {
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		let promises = recomendersPaths.map((endpoint) =>
			requests
				.get(endpoint, config)
				.then((response) =>
					response.ok ? response.json() : Promise.reject(response)
				)
		);
		Promise.all(promises).then((values) => {
			setRecomendedExercises(values);
			console.log(values);
		});
	};
	useEffect(loadRecomendations, []);
	return (
		<div className="recomendation-container">
			<div className="recomendation-title-container">
				<h5>We recomend</h5>
			</div>
			<div>
				<ExerciseRow xs={1} md={2} exercises={recomendedExercises} />
			</div>
		</div>
	);
};

export default RecomendationBox;
