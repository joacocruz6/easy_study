import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavigationMenu.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationMenu = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="MenuButton" onClick={handleShow}>
				Menu
			</Button>

			<Offcanvas
				className="NavigationMenu"
				show={show}
				onHide={handleClose}
				scroll={true}
				backdrop={false}
			>
				<Offcanvas.Header className="NavigationHeader" closeButton>
					<Offcanvas.Title>Menu</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div className="d-grid gap-2">
						<NavigationItem link="#link1" text="Link 1" />
						<NavigationItem link="#link2" text="Link 2" />
						<NavigationItem link="#link3" text="Link 3" />
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default NavigationMenu;
