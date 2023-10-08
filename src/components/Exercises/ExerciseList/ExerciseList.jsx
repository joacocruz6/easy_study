import React from "react";
import ExerciseRow from "../ExerciseRow/ExerciseRow";
import LoadingExerciseRow from "../ExerciseRow/LoadingExerciseRow";
import SearchBar from "../SearchBar/SearchBar";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import requests from "../../../utils/requests";
import { ButtonGroup, Button } from "react-bootstrap";
import RecomendationBox from "../Recomendation/Recomendation";
import InfoButton from "../../InfoButton/InfoButton";

const info = [
	<p>
		{" "}
		Aqui puedes encontrar ejercicios de los cuales otros o tu han subido.
		Estos tienen algunas categorias para saber de que tratan, ademas de su
		titulo y una pequeña descripcion.
	</p>,
	<p>
		{" "}
		Lo primero es la barra de busqueda que permite buscar por categoria.
		Aqui se puede observar que puedas buscar por mas de una categoria.
	</p>,
	<b>Recomendaciones:</b>,
	<p>
		La seccion de recomendaciones son propias de cada usuario y se basan el
		algoritmos de sugerencia para que puedas elegir el mas apropiado para
		estudiar. Este se basa en tu perfil como usuario, y en que otro material
		de estudio haz utilizado recientemente.
	</p>,
	<b>Todo material:</b>,
	<p>
		Luego de la seccion de recomendaciones esta todo el material que han
		subido tu o otros usuarios ordenados por fecha de creacion
		descendientemente.{" "}
	</p>,
];

const infoNoRecomendation = [
	<p>
		{" "}
		Aqui puedes encontrar ejercicios que tu haz subido. Estos tienen algunas
		categorias para saber de que tratan, ademas de su titulo y una pequeña
		descripcion. Parecido a la seccion de ejercicios de todos los usuarios,
		podemos ver el titulo que tu le pusiste ademas de una pequeña
		descripcion y un poco de las categorias en cual los etiquetaste. Estas
		se muestran en orden decreciente segun la fecha de creacion.
	</p>,
];

const ExerciseList = (props) => {
	const endpoint = props.endpoint;
	const recomendations = props.recomendations;
	const [exercises, setExercises] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [pageNumber, setPageNumber] = useState(1);
	const [hasNext, setHasNext] = useState(false);
	const [hasPrevious, setHasPrevious] = useState(false);
	const extraInfo = recomendations ? info : infoNoRecomendation;
	const loadExercisesData = (
		page_number = pageNumber,
		categoriesQuery = []
	) => {
		const searchParams = new URLSearchParams({ page_number: page_number });
		let url = endpoint + "?" + searchParams.toString();
		if (Array.isArray(categoriesQuery) && categoriesQuery.length > 0) {
			const categories = categoriesQuery.join();
			const categoriesParams = new URLSearchParams({
				categories: categories,
			});
			url += "&" + categoriesParams.toString();
		}
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
				setPageNumber(parseInt(data["page_number"]));
				setHasNext(data["has_next_page"]);
				setHasPrevious(parseInt(data["page_number"]) - 1 !== 0);
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
			<LoadingExerciseRow xs={1} md={2} />
			<LoadingExerciseRow xs={1} md={2} />
			<LoadingExerciseRow xs={1} md={2} />
		</>
	) : (
		exercises.map((exercise) => (
			<ExerciseRow xs={1} md={2} exercises={exercise} />
		))
	);
	const recomendation = recomendations ? <RecomendationBox /> : " ";
	return (
		<>
			<Container fluid={true}>
				<InfoButton
					header="Info sobre lista de ejercicios"
					content={extraInfo}
					overlayPlacement="right"
				/>
				<SearchBar loadHandler={loadExercisesData} />
				{recomendation}
				{content}
				{buttons}
			</Container>
		</>
	);
};

export default ExerciseList;
