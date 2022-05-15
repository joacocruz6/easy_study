import React from "react";
import Form from "react-bootstrap/Form";

const TitleInput = () => (
	<>
		<Form.Group className="mb-3" controlId="formTitle">
			<Form.Label>Title</Form.Label>
			<Form.Control type="input" placeholde="Titulo de Ejemplo" />
			<Form.Text className="text-muted">Aqui va el titulo</Form.Text>
		</Form.Group>
	</>
);

export default TitleInput;
