import React from "react";
import { useState, useEffect } from "react";
import RecomendationExerciseRow from "../ExerciseRow/RecomendationExerciseRow";
import "./Recomendation.css";
import requests from "../../../utils/requests";
import LoadingExerciseRow from "../ExerciseRow/LoadingExerciseRow";

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

const recomendationModels = [
	"66c99e25-cdc7-4ed6-8f4c-9d3619898b8b",
	"529c758f-9de6-4e25-bbd5-27db8b9f3011",
	"548e3f29-39d0-4bef-bbcf-b4bb5900785b",
	"29c909ac-ccb0-4a0a-9818-a9e0f4833910",
];

const experimentUrl = "/api/v100/experiment/";

const RecomendationBox = () => {
	const [recomendedExercises, setRecomendedExercises] = useState([]);
	const [experimentUUID, setExperimentUUID] = useState("");
	const [loading, setLoading] = useState(true);
	// Get the recomendations
	// Create the experiment
	// Create the function to finish an experiment,
	// On choosing an exercise, the experiment must be finished
	const loadRecomendations = () => {
		const config = {
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		let promises = [];
		for (let i = 0; i < recomendationModels.length; i++) {
			const recomendationModelUUID = recomendationModels[i];
			const url = `/api/v100/recomend/${recomendationModelUUID}/get_recomendation`;
			const uuid = localStorage.getItem("user_uuid");
			const data = {
				uuid: uuid,
			};
			promises.push(
				requests
					.post(url, config, data)
					.then((response) => {
						if (response.ok) {
							return response.json();
						}
						throw new Error();
					})
					.then((data) => {
						data["modelUUID"] = recomendationModelUUID;
						return data;
					})
			);
		}
		if (promises.length > 0) {
			Promise.all(promises).then((datas) => {
				console.log(datas);
				if (loading) {
					setRecomendedExercises(datas);
					const url = `/api/v100/experiment/`;
					requests
						.post(url, config, {})
						.then((response) => {
							if (response.ok) {
								return response.json();
							}
							throw new Error();
						})
						.then((data) => {
							setExperimentUUID(data.uuid);
							setLoading(false);
						});
				}
			});
		}
	};
	const registerSelectedOption = (learningObjectUUID, selectedModelUUID) => {
		return () => {
			const config = {
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			};
			let data = {
				item: learningObjectUUID,
				model: selectedModelUUID,
			};
			const url = experimentUrl + experimentUUID;
			requests
				.put(url, config, data)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					throw new Error("Error submitting experiment choice");
				})
				.then(
					(data) =>
						(window.location.href = `/~easy-study/exercises/${learningObjectUUID}`)
				)
				.catch((error) => console.log(error));
		};
	};

	useEffect(loadRecomendations, []);
	let recomendations = loading ? (
		<>
			<LoadingExerciseRow xs={1} md={2} />
			<LoadingExerciseRow xs={1} md={2} />
			<LoadingExerciseRow xs={1} md={2} />
		</>
	) : (
		<RecomendationExerciseRow
			xs={1}
			md={2}
			exercises={recomendedExercises}
			registerSelectedOption={registerSelectedOption}
		/>
	);
	return (
		<div className="recomendation-container">
			<div className="recomendation-title-container">
				<h5>We recomend</h5>
			</div>
			<div>{recomendations}</div>
		</div>
	);
};

export default RecomendationBox;
