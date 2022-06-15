import React from "react";
import Form from "react-bootstrap/Form";

const TitleInput = () => (
	<>
		<Form.Group className="mb-3" controlId="formTitle">
			<Form.Label>Title</Form.Label>
			<Form.Control type="input" placeholder="Titulo de Ejemplo" />
		</Form.Group>
	</>
);

export default TitleInput;
