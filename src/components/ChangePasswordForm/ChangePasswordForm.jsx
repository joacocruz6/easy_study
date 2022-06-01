import React from "react";
import Form from "react-bootstrap/Form";
import CardForm from "../CardForm/CardForm";
import Button from "react-bootstrap/Button";

const ChangePasswordForm = () => {
	const title = "Change Password";
	const submitButton = (
		<Button type="submit" variant="success">
			Change
		</Button>
	);
	const oldPassword = (
		<>
			<Form.Group className="mb-3" controlId="formOldPassword">
				<Form.Label>Old Password</Form.Label>
				<Form.Control type="password" />
			</Form.Group>
		</>
	);
	const newPassword = (
		<>
			<Form.Group className="mb-3" controlId="formNewPassword">
				<Form.Label>New Password</Form.Label>
				<Form.Control type="password" />
			</Form.Group>
		</>
	);
	const confirmNewPassword = (
		<>
			<Form.Group className="mb-3" controlId="formConfirmNewPassword">
				<Form.Label>Confirm New Password</Form.Label>
				<Form.Control type="password" />
			</Form.Group>
		</>
	);
	return (
		<CardForm
			cardTitle={title}
			inputs={[oldPassword, newPassword, confirmNewPassword]}
			saveButton={submitButton}
		/>
	);
};

export default ChangePasswordForm;
