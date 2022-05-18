import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import TitleInput from "./TitleInput";
import ContentInput from "./ContentInput";
import CategoriesInput from "./CategoriesInput";

import "./CreateForm.css";
import FileInput from "./FileInput";

const CreateForm = () => (
	<>
		<Container className="create_form">
			<h3 style={{ "text-align": "center" }}>Create/Upload Exercises</h3>
			<Form>
				<Row className="g-4">
					<Col>
						<TitleInput />
					</Col>
				</Row>
				<Row classame="g-4">
					<Col>
						<CategoriesInput />
					</Col>
				</Row>
				<Row className="g-4">
					<Col>
						<ContentInput />
					</Col>
				</Row>
				<Row>
					<Col>
						<FileInput />
					</Col>
				</Row>
				<Row>
					<Button className="create_button" variant="dark">
						Create
					</Button>
				</Row>
			</Form>
		</Container>
	</>
);

export default CreateForm;
