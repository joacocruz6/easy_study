import React from "react";
import { useState, useEffect } from "react";
import RecomendationExerciseRow from "../ExerciseRow/RecomendationExerciseRow";
import "./Recomendation.css";
import requests from "../../../utils/requests";
import LoadingExerciseRow from "../ExerciseRow/LoadingExerciseRow";

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
				"Content-Type": "application/json",
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		let promises = [];
		for (let i = 0; i < recomendationModels.length; i++) {
			const recomendationModelUUID = recomendationModels[i];
			const url = `/api/v100/recomend/${recomendationModelUUID}/get_recomendation/`;
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
					let recomendationExercises = [];
					for (let i = 0; i < datas.length; i++) {
						let exercise = datas[i];
						if (exercise["uuid"] === "") {
							continue;
						}
						recomendationExercises.push(exercise);
					}
					setRecomendedExercises(recomendationExercises);
					const url = `/api/v100/experiment/`;
					const config = {
						mode: "cors",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Token ${localStorage.getItem(
								"token"
							)}`,
						},
					};
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
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			};
			let data = {
				item: learningObjectUUID,
				model: selectedModelUUID,
			};
			const url = experimentUrl + experimentUUID + "/";
			requests.put(url, config, data).then((response) => {
				if (response.ok) {
					window.location.href = `/~easy-study/exercises/${learningObjectUUID}`;
				}
				throw new Error("Error submitting experiment choice");
			});
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
				<h5>Recomendaciones</h5>
			</div>
			<div>{recomendations}</div>
		</div>
	);
};

export default RecomendationBox;
