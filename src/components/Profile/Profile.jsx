import React from "react";
import { useState, useEffect } from "react";

import CardForm from "../CardForm/CardForm";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import requests from "../../utils/requests";
import handleInput from "../../utils/handleInput";

const Profile = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [userEmail, setUserEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		const endpoint = "/api/v100/user/current/";
		requests
			.get(endpoint, config)
			.then((response) => response.json())
			.then((data) => {
				setUserEmail(data["email"]);
				setFirstName(data["first_name"]);
				setLastName(data["last_name"]);
				setIsLoading(false);
			});
	}, []);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const endpoint = "/api/v100/user/update/";
		const data = {
			first_name: firstName,
			last_name: lastName,
		};
		console.log(data);
		const config = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
			body: JSON.stringify(data),
		};
		requests
			.request(endpoint, config)
			.then((response) => response.json())
			.then((data) =>
				localStorage.setItem(
					"user_name",
					`${data["first_name"]} ${data["last_name"]}`
				)
			);
	};

	const title = isLoading ? (
		<>
			<Placeholder xs={4} />
		</>
	) : (
		`${firstName} ${lastName} Profile`
	);

	const button = isLoading ? (
		<>
			<Placeholder.Button variant="success" xs={4} />
		</>
	) : (
		<Button type="submit" variant="success">
			Guardar
		</Button>
	);
	const emailValue = isLoading ? (
		<>
			<br />
			<Placeholder xs={6} />
		</>
	) : (
		<Form.Control plaintext readOnly defaultValue={userEmail} />
	);
	const emailInput = (
		<>
			<Form.Group className="mb-3" controlId="formEmail">
				<Form.Label>Correo Electronico</Form.Label>
				{emailValue}
			</Form.Group>
		</>
	);
	const firstNameValue = isLoading ? (
		<>
			<br />
			<Placeholder xs={6} />
		</>
	) : (
		<Form.Control
			type="input"
			defaultValue={firstName}
			onChange={handleInput(setFirstName)}
		/>
	);
	const firstNameInput = (
		<>
			<Form.Group className="mb-3" controlId="formFirstName">
				<Form.Label>Nombre</Form.Label>
				{firstNameValue}
			</Form.Group>
		</>
	);
	const lastNameValue = isLoading ? (
		<>
			<br />
			<Placeholder xs={6} />
		</>
	) : (
		<Form.Control
			type="input"
			defaultValue={lastName}
			onChange={handleInput(setLastName)}
		/>
	);

	const lastNameInput = (
		<>
			<Form.Group className="mb-3" controlId="formLastName">
				<Form.Label>Apellido</Form.Label>
				{lastNameValue}
			</Form.Group>
		</>
	);
	const changePassword = isLoading ? (
		<>
			<Placeholder.Button
				variant="secondary"
				xs={4}
				style={{ marginTop: "10px" }}
			/>
		</>
	) : (
		<Button
			href="/~easy-study/change_password"
			style={{ marginTop: "10px" }}
			variant="secondary"
		>
			Cambiar tu contraseña
		</Button>
	);

	return (
		<CardForm
			cardTitle={title}
			inputs={[emailInput, firstNameInput, lastNameInput]}
			saveButton={button}
			extraComponents={[changePassword]}
			onSubmit={handleFormSubmit}
		/>
	);
};

export default Profile;
