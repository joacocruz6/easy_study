import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./HomePage.css";

const HomePage = () => (
	<>
		<Container fluid={true}>
			<Row xs={2} md={2} className="g-4">
				<Col>
					<Card className="card">
						{/*<Card.Img variant="top" src="holder.js/100px180" />*/}
						<Card.Body>
							<Card.Title>
								Ver todos los archivos compartidos
							</Card.Title>
							<Card.Text>
								En esta seccion, puedes ver todo el material de
								estudio que tu y otros usuarios han subido a la
								plataforma, y puedes filtrarlos por categoria.
							</Card.Text>
							<div className="text-center">
								<Button href="/~easy-study/exercises/all">
									Ver todo el material subido
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="card">
						{/*<Card.Img variant="top" src="holder.js/100px180" />*/}
						<Card.Body>
							<Card.Title>Subir material de estuido</Card.Title>
							<Card.Text>
								En esta seccion puedes subir o crear material de
								estudio para ser compartido.
							</Card.Text>
							<div className="text-center">
								<Button href="/~easy-study/exercises/create">
									Subir/Crear Contenido
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row xs={1} md={2} style={{ marginTop: "10px" }} className="g-4">
				<Col>
					<Card className="card">
						{/*<Card.Img variant="top" src="holder.js/100px180" />*/}
						<Card.Body>
							<Card.Title>Ver mi material compartido.</Card.Title>
							<Card.Text>
								Ver el material de estudio que solo <b>tu</b>{" "}
								haz ingresado al sistema.
							</Card.Text>
							<div className="text-center">
								<Button href="/~easy-study/exercises/my_exercises">
									Ver mi material subido.
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="card">
						{/*<Card.Img variant="top" src="holder.js/100px180" />*/}
						<Card.Body>
							<Card.Title>Perfil</Card.Title>
							<Card.Text>
								En esta seccion puedes ver y modificar tu perfil
								de usuario.
							</Card.Text>
							<div className="text-center">
								<Button href="/~easy-study/profile">
									Ver perfil
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	</>
);

export default HomePage;
