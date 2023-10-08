import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./HomePage.css";
import InfoButton from "../InfoButton/InfoButton";
import { BsList } from "react-icons/bs";

const info = [
	<p>
		En esta interfaz puedes ver cuatro otras que puedes ingresar. Aqui se
		detallaran que contiene cada una de ellas.
	</p>,
	<b>Ver todos los archivos compartidos:</b>,
	<p>
		Primero en ver los archivos compartidos puedes observar todos los
		archivos que tu y otros usuarios han ingresado en el motor Repositorium.
		Esto puede ser a travez de EasyStudy o bien de otros software que lo
		utilizen. Tambien aca encontraras recomendaciones de material el cual
		puedes ingresar para estudiar para tu siguiente evaluacion.
	</p>,
	<b>Subir material de estudio:</b>,
	<p>
		Arriba a la derecha puedes ingresar al formulario para agregar mas
		material al sistema. Puedes reutilizarlo tu o bien otras personas
		tambien pueden verse beneficiadas de este.
	</p>,
	<b>Ver mi material compartido:</b>,
	<p>
		Abajo a la izquierda esta el link para ingresar al material que solo
		*TU* haz ingresado a EasyStudy.
	</p>,
	<b>Perfil:</b>,
	<p>
		Finalmente abajo a la derecha, puede ingresar a tu perfil y hacer todas
		las modificaciones necesarias.
	</p>,
	<b>Otros:</b>,
	<p>
		Utiliza la barra de navegacion de arriba para acceder directamente a
		estas secciones. Para hacerlo, presiona el menu con el simbolo{" "}
		<BsList /> a la izquierda para desplegar el menu. Ahi podras encontrar
		las distintas secciones al presionar ese boton o volver hacia esta
		pagina haciendo click en Inicio.
	</p>,
];

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
		<InfoButton
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			header="Informacion Extra"
			content={[info]}
			overlayPlacement="right"
		/>
	</>
);

export default HomePage;
