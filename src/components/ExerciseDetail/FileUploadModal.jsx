import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useParams } from "react-router-dom";
import requests from "../../utils/requests";
const FileUploadModal = (props) => {
	const show = props.show;
	const onHide = props.onHide;
	const { exercise_uuid } = useParams();
	const [file, setFile] = useState(null);
	const handleFileChange = (event) => {
		let submittedFile = event.target.files[0];
		setFile(submittedFile);
	};
	const handleSubmit = () => {
		if (!file) {
			alert("No file submitted");
			return;
		}
		const endpoint = `/api/v100/learning_object/files/${exercise_uuid}`;
		const config = {
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		requests
			.postFile(endpoint, config, file)
			.then((response) => {
				if (response.ok) {
					document.location.href = `/exercises/${exercise_uuid}`;
					return;
				}
				throw Error("Something went wrong");
			})
			.catch((error) => alert("Something went wrong, try again"));
	};
	return (
		<>
			<Modal show={show} onHide={onHide}>
				<Modal.Header closeButton>
					<Modal.Title>Upload file</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Control type="file" onChange={handleFileChange} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={onHide}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSubmit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default FileUploadModal;
