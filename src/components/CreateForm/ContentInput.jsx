import React from "react";
import Form from "react-bootstrap/Form";
import handleInput from "../../utils/handleInput";

const ContentInput = (props) => {
	const onChange = props.onChange;
	const label = props.label;
	const controlId = props.controlId;
	const rows = props.rows;
	return (
		<>
			<Form.Group className="mb-3" controlId={controlId}>
				<Form.Label>{label}</Form.Label>
				<Form.Control
					as="textarea"
					rows={rows}
					onChange={handleInput(onChange)}
				/>
			</Form.Group>
		</>
	);
};

export default ContentInput;
