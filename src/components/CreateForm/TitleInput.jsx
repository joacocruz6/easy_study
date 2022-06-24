import React from "react";
import Form from "react-bootstrap/Form";
import handleInput from "../../utils/handleInput";

const TitleInput = (props) => {
	const onChange = props.onChange;
	return (
		<>
			<Form.Group className="mb-3" controlId="formTitle">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="input"
					placeholder="Titulo de Ejemplo"
					onChange={handleInput(onChange)}
				/>
			</Form.Group>
		</>
	);
};

export default TitleInput;
