import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap";
import NavigationRegister from "../Navbar/NavigationMenu/NavigationRegister/NavigationRegister";
import "./AnonymousLanding.css";
import NavigationLogIn from "../Navbar/NavigationMenu/NavigationLogIn/NavigationLogIn";

const AnonymousLanding = () => (
	<>
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title style={{ textAlign: "center" }}>
					<h2>Welcome!</h2>
				</Card.Title>
				<Card.Text>
					<b>EasyStudy</b> is a software that allows you to study from
					material that everyone can submit. This can be plain text
					but also files. It uses <b>Repositorium</b> as backend, so
					if you already have an account with a software that also
					uses it, you can log-in with that account. Check it out with
					creating an account and start using it:
				</Card.Text>
				<NavigationRegister />
				<Card.Text>Or log-in if you already have an account:</Card.Text>
				<NavigationLogIn />
			</Card.Body>
		</Card>
	</>
);

export default AnonymousLanding;
