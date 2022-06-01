import React from "react";
import CardForm from "../CardForm/CardForm";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const Profile = () => {
	const title = "Mark Otto Profile";

	const button = (
		<Button type="submit" variant="success">
			Save
		</Button>
	);
	const email = (
		<>
			<Form.Group className="mb-3" controlId="formEmail">
				<Form.Label>Email:</Form.Label>
				<Form.Control
					plaintext
					readOnly
					defaultValue="mark.otto@gmail.com"
				/>
			</Form.Group>
		</>
	);
	const firstNameInput = (
		<>
			<Form.Group className="mb-3" controlId="formFirstName">
				<Form.Label>First Name</Form.Label>
				<Form.Control type="input" defaultValue="Mark" />
			</Form.Group>
		</>
	);
	const lastNameInput = (
		<>
			<Form.Group className="mb-3" controlId="formLastName">
				<Form.Label>Last Name</Form.Label>
				<Form.Control type="input" defaultValue="Otto" />
			</Form.Group>
		</>
	);
	const changePassword = (
		<Button style={{ margin: "10px" }} variant="secondary">
			Change Password
		</Button>
	);

	return (
		<CardForm
			cardTitle={title}
			inputs={[email, firstNameInput, lastNameInput]}
			saveButton={button}
			extraComponents={[changePassword]}
		/>
	);
};

export default Profile;
