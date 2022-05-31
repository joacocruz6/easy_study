import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./LoginPage.css";

const LoginPage = () => (
	<>
		<Card className="login_card">
			<Card.Body>
				<Card.Title>Log In</Card.Title>
				<Form className="login_form">
					<Form.Group className="mb-3" controlId="loginEmail">
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="loginPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Form>
				<Button
					variant="secondary"
					type="submit"
					className="login_button"
				>
					Log in
				</Button>
			</Card.Body>
		</Card>
	</>
);

export default LoginPage;
