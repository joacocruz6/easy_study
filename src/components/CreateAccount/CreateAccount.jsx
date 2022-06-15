import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardForm from "../CardForm/CardForm";

const CreateAccountForm = () => {
	const title = "Create Account";
	const submitButton = (
		<Button type="submit" variant="success">
			Create
		</Button>
	);
	const email = (
		<>
			<Form.Group className="mb-3" controlId="emailInput">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					placeholder="ex: example@email.com"
				/>
			</Form.Group>
		</>
	);
	const first_name_input = (
		<>
			<Form.Group className="mb-3" controlId="firstNameInput">
				<Form.Label>First Name</Form.Label>
				<Form.Control type="input" placeholder="ex: Cosme" />
			</Form.Group>
		</>
	);
	const last_name_input = (
		<>
			<Form.Group className="mb-3" controlId="lastNameInput">
				<Form.Label>Last Name</Form.Label>
				<Form.Control type="input" placeholder="ex: Fulanito" />
			</Form.Group>
		</>
	);
	const password_input = (
		<>
			<Form.Group className="mb-3" controlId="passwordInput">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" />
			</Form.Group>
		</>
	);
	return (
		<CardForm
			cardTitle={title}
			inputs={[email, first_name_input, last_name_input, password_input]}
			saveButton={submitButton}
		/>
	);
};

export default CreateAccountForm;
