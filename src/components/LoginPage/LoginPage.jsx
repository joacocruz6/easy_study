import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./LoginPage.css";
import handleInput from "../../utils/handleInput";

const LoginPage = (props) => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const authenticate = props.authenticate;
	const handleForm = (event) => authenticate(event, userEmail, userPassword);

	return (
		<>
			<Card className="login_card">
				<Card.Body>
					<Card.Title>Log In</Card.Title>
					<Form className="login_form" onSubmit={handleForm}>
						<Form.Group className="mb-3" controlId="loginEmail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								onChange={handleInput(setUserEmail)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="loginPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={handleInput(setUserPassword)}
							/>
						</Form.Group>
						<Button
							variant="secondary"
							type="submit"
							className="login_button"
						>
							Log in
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
};
export default LoginPage;
