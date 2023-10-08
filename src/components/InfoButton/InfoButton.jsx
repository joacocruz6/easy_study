import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { AiOutlineInfoCircle } from "react-icons/ai";

const InfoButton = (props) => {
	const header = props.header;
	const content = props.content;
	const overlayPlacement = props.overlayPlacement;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Informacion
		</Tooltip>
	);

	return (
		<>
			<div style={{ margin: "10px" }}>
				<OverlayTrigger
					placement={overlayPlacement}
					delay={{ show: 250, hide: 400 }}
					overlay={renderTooltip}
				>
					<Button
						style={{ borderRadius: "50%" }}
						variant="secondary"
						onClick={handleShow}
					>
						<AiOutlineInfoCircle />
					</Button>
				</OverlayTrigger>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header>{header}</Modal.Header>
					<Modal.Body>{content.map((text) => text)}</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Cerrar
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</>
	);
};

export default InfoButton;
