import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardForm from "../CardForm/CardForm";
import handleInput from "../../utils/handleInput";
import requests from "../../utils/requests";

const CreateAccountForm = () => {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");

	const submit = (event) => {
		event.preventDefault();
		const endpoint = "/api/v100/user/create/";
		const config = {
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const data = {
			email: email,
			first_name: firstName,
			last_name: lastName,
			password: password,
		};
		requests
			.post(endpoint, config, data)
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	const title = "Create Account";
	const submitButton = (
		<Button type="submit" variant="success">
			Create
		</Button>
	);
	const emailInput = (
		<>
			<Form.Group className="mb-3" controlId="emailInput">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					placeholder="ex: example@email.com"
					onChange={handleInput(setEmail)}
				/>
			</Form.Group>
		</>
	);
	const firstNameInput = (
		<>
			<Form.Group className="mb-3" controlId="firstNameInput">
				<Form.Label>First Name</Form.Label>
				<Form.Control
					type="input"
					placeholder="ex: Cosme"
					onChange={handleInput(setFirstName)}
				/>
			</Form.Group>
		</>
	);
	const lastNameInput = (
		<>
			<Form.Group className="mb-3" controlId="lastNameInput">
				<Form.Label>Last Name</Form.Label>
				<Form.Control
					type="input"
					placeholder="ex: Fulanito"
					onChange={handleInput(setLastName)}
				/>
			</Form.Group>
		</>
	);
	const passwordInput = (
		<>
			<Form.Group className="mb-3" controlId="passwordInput">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					onChange={handleInput(setPassword)}
				/>
			</Form.Group>
		</>
	);
	return (
		<CardForm
			cardTitle={title}
			inputs={[emailInput, firstNameInput, lastNameInput, passwordInput]}
			saveButton={submitButton}
			onSubmit={submit}
		/>
	);
};

export default CreateAccountForm;
