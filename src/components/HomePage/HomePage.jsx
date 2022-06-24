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
							<Card.Title>See all exercises</Card.Title>
							<Card.Text>
								Here you can see all the exercises submitted,
								filter them by title and categories.
							</Card.Text>
							<div className="text-center">
								<Button href="/exercises/all">
									See all exercises
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="card">
						{/*<Card.Img variant="top" src="holder.js/100px180" />*/}
						<Card.Body>
							<Card.Title>Create an exercise</Card.Title>
							<Card.Text>
								Here you can upload or create an exercise to the
								repositorium system.
							</Card.Text>
							<div className="text-center">
								<Button href="/exercises/create">
									Create an exercise
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
							<Card.Title>See my exercises</Card.Title>
							<Card.Text>
								See the exercises that you have updated into the
								system.
							</Card.Text>
							<div className="text-center">
								<Button href="/exercises/my_exercises">
									See my exercises created
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
								<Button>Change profile</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	</>
);

export default HomePage;
