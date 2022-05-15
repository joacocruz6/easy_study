import React from "react";
import Form from "react-bootstrap/Form";

const ContentInput = () => (
	<>
		<Form.Group className="mb-3" controlId="content-area">
			<Form.Label>Content</Form.Label>
			<Form.Control as="textarea" rows={5} />
		</Form.Group>
	</>
);

export default ContentInput;
