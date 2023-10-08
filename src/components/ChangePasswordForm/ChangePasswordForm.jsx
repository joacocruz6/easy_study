import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import CardForm from "../CardForm/CardForm";
import Button from "react-bootstrap/Button";
import requests from "../../utils/requests";
import handleInput from "../../utils/handleInput";
const ChangePasswordForm = () => {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");

	const submit = (event) => {
		event.preventDefault();
		const url = "/api/v100/user/change_password/";
		const config = {
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		const data = {
			current_password: oldPassword,
			new_password: newPassword,
			confirm_new_password: confirmNewPassword,
		};
		console.log(data);
		requests
			.post(url, config, data)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error("Something went wrong");
			})
			.then((data) => (document.location = "/~easy-study/profile/"))
			.catch((error) => console.log(error));
	};
	const title = "Cambiar contraseña";
	const submitButton = (
		<Button type="submit" variant="success">
			Cambiar Contraseña
		</Button>
	);
	const oldPasswordInput = (
		<>
			<Form.Group className="mb-3" controlId="formOldPassword">
				<Form.Label>Contraseña Antigua</Form.Label>
				<Form.Control
					type="password"
					onChange={handleInput(setOldPassword)}
				/>
			</Form.Group>
		</>
	);
	const newPasswordInput = (
		<>
			<Form.Group className="mb-3" controlId="formNewPassword">
				<Form.Label>Nueva Contraseña</Form.Label>
				<Form.Control
					type="password"
					onChange={handleInput(setNewPassword)}
				/>
			</Form.Group>
		</>
	);
	const confirmNewPasswordInput = (
		<>
			<Form.Group className="mb-3" controlId="formConfirmNewPassword">
				<Form.Label>Confirmar Nueva Contraseña</Form.Label>
				<Form.Control
					type="password"
					onChange={handleInput(setConfirmNewPassword)}
				/>
			</Form.Group>
		</>
	);
	return (
		<CardForm
			cardTitle={title}
			inputs={[
				oldPasswordInput,
				newPasswordInput,
				confirmNewPasswordInput,
			]}
			saveButton={submitButton}
			onSubmit={submit}
		/>
	);
};

export default ChangePasswordForm;
