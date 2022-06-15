import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import NavigationMenu from "./NavigationMenu/NavigationMenu.jsx";
import NavigationLogout from "./NavigationMenu/NavigationLogout/NavigationLogout.jsx";
import NavigationLogIn from "./NavigationMenu/NavigationLogIn/NavigationLogIn";
import NavigationRegister from "./NavigationMenu/NavigationRegister/NavigationRegister";

const NavbarProfile = (props) => {
	const isAuthenticated = props.isAuthenticated;
	const logout = props.logout;
	if (isAuthenticated) {
		return (
			<>
				<Navbar.Text>
					Signed in as: <span className="user_text">Mark Otto</span>
				</Navbar.Text>
				<NavigationLogout logout={logout} />
			</>
		);
	}
	return (
		<>
			<NavigationRegister />
			<NavigationLogIn />
		</>
	);
};

const Navigation = (props) => {
	const isAuthenticated = props.isAuthenticated;
	const logout = props.logout;
	const menu = isAuthenticated ? <NavigationMenu logout={logout} /> : "";

	return (
		<>
			<Navbar className="navigation" fixed="top" variant="dark">
				<Container>
					{menu}
					<Navbar.Toggle />
					<Navbar.Collapse style={{ "padding-left": "27vw" }}>
						<Navbar.Brand href="/">
							<h4> EasyStudy </h4>
						</Navbar.Brand>
					</Navbar.Collapse>
					<Navbar.Collapse className="justify-content-end">
						<NavbarProfile
							isAuthenticated={isAuthenticated}
							logout={logout}
						/>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
