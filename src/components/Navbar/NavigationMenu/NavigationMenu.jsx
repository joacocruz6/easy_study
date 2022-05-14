import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavigationMenu.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationProfile from "./NavigationProfile/NavigationProfile";
import { BsList } from "react-icons/bs";

const NavigationMenu = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button className="MenuButton" onClick={handleShow}>
				<BsList />
			</Button>

			<Offcanvas
				className="NavigationMenu"
				show={show}
				onHide={handleClose}
				scroll={true}
				backdrop={false}
			>
				<Offcanvas.Header className="NavigationHeader" closeButton>
					<Offcanvas.Title>
						{" "}
						<BsList style={{ "margin-bottom": "3px" }} /> Menu
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div className="d-grid gap-2">
						<NavigationItem link="#link1" text="Link 1" />
						<NavigationItem link="#link2" text="Link 2" />
						<NavigationItem link="#link3" text="Link 3" />
					</div>
					<NavigationProfile />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default NavigationMenu;
