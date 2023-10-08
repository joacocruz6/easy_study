import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Collapse from "react-bootstrap/Collapse";
import "./NavigationMenu.css";
import "./NavigationItem/NavigationItem.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationProfile from "./NavigationProfile/NavigationProfile";
import { BsList, BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";

const ExercisesDropdown = () => {
	const [open, setOpen] = useState(false);
	const icon = open ? <BsCaretUpFill /> : <BsCaretDownFill />;
	const class_name = open ? "active_navigation_button" : "navigation_button";
	const DropdownItem = (props) => (
		<NavigationItem style={{ width: "100%" }} {...props} />
	);

	return (
		<>
			<Button
				className={class_name}
				onClick={() => setOpen(!open)}
				aria-controls="execises-dropdown"
				aria-expanded={open}
			>
				Secciones {icon}
			</Button>
			<Collapse in={open}>
				<div className="collapse_div" id="execises-dropdown">
					<DropdownItem
						link="/~easy-study/exercises/all"
						text="Ver todo el contenido subido"
					/>
					<DropdownItem
						link="/~easy-study/exercises/create"
						text="Subir/Crear material de estudio"
					/>
					<DropdownItem
						link="/~easy-study/exercises/my_exercises"
						text="Ver mi material subido/creado"
					/>
				</div>
			</Collapse>
		</>
	);
};

const NavigationMenu = (props) => {
	const logout = props.logout;
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
						<BsList style={{ marginBottom: "3px" }} /> Menu
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<div className="d-grid gap-2">
						<NavigationItem link="/~easy-study/" text="Inicio" />
						<ExercisesDropdown />
					</div>
					<NavigationProfile logout={logout} />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default NavigationMenu;
