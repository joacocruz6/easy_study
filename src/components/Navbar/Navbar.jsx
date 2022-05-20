import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import NavigationMenu from "./NavigationMenu/NavigationMenu.jsx";

const Navigation = () => {
	return (
		<>
			<Navbar className="navigation" fixed="top" variant="dark">
				<Container>
					<NavigationMenu />
					<Navbar.Toggle />
					<Navbar.Collapse style={{ "padding-left": "27vw" }}>
						<Navbar.Brand href="/">
							<h4> EasyStudy </h4>
						</Navbar.Brand>
					</Navbar.Collapse>
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							Signed in as:{" "}
							<span className="user_text">Mark Otto</span>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
