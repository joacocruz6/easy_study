import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TitleInput from "./TitleInput";
import ContentInput from "./ContentInput";
import CategoriesInput from "./CategoriesInput";

import "./CreateForm.css";
import FileInput from "./FileInput";
import { Card } from "react-bootstrap";

const CreateForm = () => (
	<>
		<Card className="create_card">
			<Card.Body>
				<Card.Title>Create/Upload Exercises</Card.Title>
				<Form className="create_form">
					<TitleInput />
					<CategoriesInput />
					<ContentInput />
					<FileInput />
				</Form>
				<Button type="submit" className="create_button" variant="dark">
					Create
				</Button>
			</Card.Body>
		</Card>
	</>
);

export default CreateForm;
