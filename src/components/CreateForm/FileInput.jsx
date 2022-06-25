import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BsPlusLg, BsXLg } from "react-icons/bs";

import "./FileInput.css";

const renderTooltip = (props) => (
	<Tooltip id="button-tooltip" {...props}>
		Add more files.
	</Tooltip>
);
const renderDismissTooltip = (props) => (
	<Tooltip id="dismiss-tooltip" {...props}>
		Dismiss file
	</Tooltip>
);

const FileInput = () => (
	<>
		<Form.Group controlId="formFile" className="mb-3">
			<Form.Label>Upload files</Form.Label>
			<Row>
				<Col>
					<Form.Control type="file" />
				</Col>
				<Col>
					<OverlayTrigger
						placement="right"
						delay={{ show: 250, hide: 400 }}
						overlay={renderDismissTooltip}
					>
						<Button variant="outline-danger">
							<BsXLg />
						</Button>
					</OverlayTrigger>
				</Col>
			</Row>
		</Form.Group>
		<OverlayTrigger
			placement="right"
			delay={{ show: 250, hide: 400 }}
			overlay={renderTooltip}
		>
			<Button variant="outline-secondary" className="add_file_button">
				{" "}
				<BsPlusLg />{" "}
			</Button>
		</OverlayTrigger>
	</>
);

export default FileInput;
