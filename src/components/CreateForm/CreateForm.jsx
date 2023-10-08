import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TitleInput from "./TitleInput";
import ContentInput from "./ContentInput";
import CategoriesInput from "./CategoriesInput";

import "./CreateForm.css";
import FileInput from "./FileInput";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import requests from "../../utils/requests";
import InfoButton from "../InfoButton/InfoButton";

const info = [
	<p>
		En este formulario puedes subir contenido para ser compartido con otros
		usuarios.
	</p>,
	<b>Titulo:</b>,
	<p>El titulo que tiene tu material de estudio.</p>,
	<b>Categorias:</b>,
	<p>
		Una lista de categorias que ayudaran a los demas a saber que contenido
		puede tener este material
	</p>,
	<b>Descripcion:</b>,
	<p>Una pequeña descripcion de lo que estas compartiendo</p>,
	<b>*Contenido:</b>,
	<p>
		Este campo es completamente opcional si es que subes un archivo. Aca es
		el contenido del material de estudio en texto. Cabe destacar que
		Repositorium y EasyStudy no compilan ni entienden ningun lenguaje o
		texto que pueda ser compilado como latex o markdown. Cualquier material
		debe ser subido como texto plano si es que llenas este campo.
	</p>,
	<b>Archivos:</b>,
	<p>
		Aqui puedes subir archivos para respaldar el material que estas
		subiendo. Estos pueden ser archivos latex, compilados o el codigo en si.
		Imagenes, entre otros. Repositorium y EasyStudy soportan cualquier tipo
		multimedia.
	</p>,
];

const CreateForm = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");
	const [categories, setCategories] = useState({});
	const [categoryOptions, setCategoryOptions] = useState([]);
	const [hasNextPage, setHasNextPage] = useState(true);
	const [pageNumber, setPageNumber] = useState(1);
	const [isLoadingCategories, setIsLoadingCategories] = useState(true);
	const [files, setFiles] = useState({ 0: null });
	const [count, setCount] = useState(1);
	const [filesKeys, setFilesKeys] = useState(Object.keys(files));
	const maxCount = 2;
	const addFileHandler = () => {
		if (Object.keys(files).length > maxCount) return;
		files[count] = null;
		filesKeys.push(count.toString());
		setFiles(files);
		setCount(count + 1);
		setFilesKeys(filesKeys);
		console.log(files);
		console.log(filesKeys);
	};
	const dismissFileHandlerFactory = (key) => {
		return () => {
			delete files[key];
			setFiles(files);
			setFilesKeys(Object.keys(files));
			console.log(files);
			console.log(filesKeys);
		};
	};

	const handleInputChange = (key) => {
		return (event) => {
			files[key] = event.target.files[0];
			setFiles(files);
			console.log(files);
		};
	};
	const loadCategoryOptions = () => {
		const searchParams = new URLSearchParams({ page_number: pageNumber });
		const endpoint = "/api/v100/category/?" + searchParams.toString();
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		if (hasNextPage) {
			setIsLoadingCategories(true);
			requests
				.get(endpoint, config)
				.then((response) => response.json())
				.then((data) => {
					let categoriesNames = categoryOptions;
					data["categories"].forEach((category) =>
						categoriesNames.push({
							value: category["name"],
							label: category["name"],
						})
					);
					setHasNextPage(data["has_next_page"]);
					if (data["has_next_page"]) {
						setPageNumber(pageNumber + 1);
					}
					setCategoryOptions(categoriesNames);
					setIsLoadingCategories(false);
				});
		}
	};
	const onSubmit = (event) => {
		event.preventDefault();
		const filesToSubmit = [];
		Object.keys(files).forEach((value) => {
			if (files[value]) filesToSubmit.push(files[value]);
		});
		console.log(filesToSubmit);
		const categoryData = categories.map((category) => category.value);
		const data = {
			title: title,
			description: description,
			categories: categoryData,
			content: content,
			system_uuid: process.env.REACT_APP_SYSTEM_UUID,
		};
		const config = {
			mode: "cors",
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
		};
		const endpoint = "/api/v100/learning_object/";
		requests
			.post(endpoint, config, data)
			.then((response) => response.json())
			.then((data) => {
				const uuid = data.uuid;
				const filesUpload = [];
				const filesEndpoint = `/api/v100/learning_object/files/${uuid}/`;
				const config = {
					headers: {
						Authorization: `Token ${localStorage.getItem("token")}`,
					},
				};
				filesToSubmit.forEach((file) => {
					filesUpload.push(
						requests.postFile(filesEndpoint, config, file)
					);
				});
				Promise.all(filesUpload).then(
					(values) =>
						(document.location.href = `/~easy-study/exercises/${uuid}`)
				);
			});
	};
	useEffect(loadCategoryOptions, []);

	return (
		<>
			<InfoButton
				content={info}
				header="Informacion"
				overlayPlacement="right"
			/>
			<Card className="create_card">
				<Card.Body>
					<Card.Title>Subir/Crear Ejercicios</Card.Title>
					<Form className="create_form" onSubmit={onSubmit}>
						<TitleInput onChange={setTitle} />
						<CategoriesInput
							onChangeHandle={setCategories}
							categoriesLoad={loadCategoryOptions}
							categoryOptions={categoryOptions}
							isLoading={isLoadingCategories}
						/>
						<ContentInput
							label="Descripcion"
							rows={5}
							controlId="description-area"
							onChange={setDescription}
						/>
						<ContentInput
							label="Contenido"
							rows={10}
							controlId="content-area"
							onChange={setContent}
						/>
						<FileInput
							files={files}
							inputChange={handleInputChange}
							setFiles={setFiles}
							addFile={addFileHandler}
							fileKeys={filesKeys}
							dismissGenerator={dismissFileHandlerFactory}
						/>
						<div>
							<Button
								type="submit"
								className="create_button"
								variant="dark"
							>
								Crear
							</Button>
						</div>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
};

export default CreateForm;
