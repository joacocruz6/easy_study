import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import NavigationMenu from "./NavigationMenu/NavigationMenu.jsx";
import NavigationLogout from "./NavigationMenu/NavigationLogout/NavigationLogout.jsx";
import NavigationLogIn from "./NavigationMenu/NavigationLogIn/NavigationLogIn";
import NavigationRegister from "./NavigationMenu/NavigationRegister/NavigationRegister";
import requests from "../../utils/requests";
import { useState } from "react";

const NavbarProfile = (props) => {
	const isAuthenticated = props.isAuthenticated;
	const logout = props.logout;
	let user_name = localStorage.getItem("user_name");
	let user_email = localStorage.getItem("user_email");
	if (!user_name) user_name = "";
	const [userFullName, setUserFullName] = useState(user_name);
	if (isAuthenticated) {
		if (userFullName === "" || !user_email) {
			const endpoint = "/api/v100/user/current/";
			const config = {
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
				},
			};
			requests
				.get(endpoint, config)
				.then((response) => response.json())
				.then((data) => {
					let userName = `${data["first_name"]} ${data["last_name"]}`;
					let userEmail = data["email"];
					localStorage.setItem("user_name", userName);
					localStorage.setItem("user_email", userEmail);
					setUserFullName(userName);
				});
		}
		return (
			<>
				<Navbar.Text>
					Signed in as:{" "}
					<span className="user_text">{userFullName}</span>
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
					<Navbar.Collapse style={{ paddingLeft: "27vw" }}>
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
