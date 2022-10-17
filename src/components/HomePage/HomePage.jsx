import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./HomePage.css";

const HomePage = () => (
	<>
		<Container>
			<Row xs={2} md={2} className="g-4">
				<Col>
					<Card className="card">
						{/*<Card.Img variant="top" src="holder.js/100px180" />*/}
						<Card.Body>
							<Card.Title>See all study content</Card.Title>
							<Card.Text>
								Here you can see all the study material
								submitted, filter them by categories.
							</Card.Text>
							<div className="text-center">
								<Button href="/~easy-study/exercises/all">
									See all content
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="card">
						{/*<Card.Img variant="top" src="holder.js/100px180" />*/}
						<Card.Body>
							<Card.Title>Upload study content</Card.Title>
							<Card.Text>
								Here you can upload or create study content to
								the repositorium system.
							</Card.Text>
							<div className="text-center">
								<Button href="/~easy-study/exercises/create">
									Upload/Create Content
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
							<Card.Title>See my uploaded content</Card.Title>
							<Card.Text>
								See the study content that <b>you</b> have
								updated into the system.
							</Card.Text>
							<div className="text-center">
								<Button href="/~easy-study/exercises/my_exercises">
									See my uploaded content
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="card">
						{/*<Card.Img variant="top" src="holder.js/100px180" />*/}
						<Card.Body>
							<Card.Title>Profile</Card.Title>
							<Card.Text>
								You can change and see your profile information.
							</Card.Text>
							<div className="text-center">
								<Button href="/~easy-study/profile">
									Change profile
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
