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
					<b>EasyStudy</b> es un software que te ayuda a estudiar de
					material que cualquier otro usuario puede ingresar. Tu
					tambien puedes aportar material de estudio para construir
					una comunidad y ayudarse entre usuarios a obtener mejores
					resultados en sus pruebas/controles/tareas/interrogaciones.{" "}
					<b>EasyStudy</b> utiliza el motor de <b>Repositorium</b> por
					detras, que permite conectar varios sistemas de comunidad
					para enriquezer la experiencia. Si ya tienes cuenta de
					usuario en otro software que utilize Repositorium, puedes
					ingresar con la misma cuenta.
					<br />
					Conviertete en parte de la comunidad:
				</Card.Text>
				<NavigationRegister />
				<Card.Text>O ingresa si ya tienes una cuenta:</Card.Text>
				<NavigationLogIn />
			</Card.Body>
		</Card>
	</>
);

export default AnonymousLanding;
