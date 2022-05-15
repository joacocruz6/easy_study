import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleInput from "./TitleInput";
import ContentInput from "./ContentInput";

const CreateForm = () => (
	<>
		<Container style={{ "text-align": "left" }}>
			<Form>
				<Row className="g-4">
					<Col>
						<TitleInput />
					</Col>
				</Row>
				<Row className="g-4">
					<Col>
						<ContentInput />
					</Col>
				</Row>
			</Form>
		</Container>
	</>
);

export default CreateForm;
