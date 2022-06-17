import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar/Navbar.jsx";
import ExerciseList from "./components/Exercises/ExerciseList/ExerciseList";
import CreateForm from "./components/CreateForm/CreateForm.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExerciseDetail from "./components/ExerciseDetail/ExerciseDetail";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import Profile from "./components/Profile/Profile";
import ChangePasswordForm from "./components/ChangePasswordForm/ChangePasswordForm";
import CreateAccountForm from "./components/CreateAccount/CreateAccount";
import AnonymousLanding from "./components/AnonymousLanding/AnonymousLanding";
import requests from "./utils/requests";

const Main = (props) => {
	const isAuthenticated = props.isAuthenticated;
	const authenticate = props.authenticate;
	const logout = props.logout;

	let routes = (
		<>
			<Route path="/" element={<AnonymousLanding />}></Route>
			<Route path="account/create" element={<CreateAccountForm />} />
			<Route
				path="login"
				element={<LoginPage authenticate={authenticate} />}
			/>
		</>
	);
	if (isAuthenticated) {
		routes = (
			<>
				<Route path="/" element={<HomePage />} />
				<Route path="exercises">
					<Route path="create" element={<CreateForm />} />
					<Route path="all" element={<ExerciseList />} />
					<Route path=":exercise_uuid" element={<ExerciseDetail />} />
					<Route path="my_exercises" element={<ExerciseList />} />
				</Route>
				<Route path="profile" element={<Profile />} />
				<Route
					path="change_password"
					element={<ChangePasswordForm />}
				/>
			</>
		);
	}
	return (
		<div className="main">
			<BrowserRouter>
				<Routes>{routes}</Routes>
			</BrowserRouter>
		</div>
	);
};

function App() {
	const haveAuthToken = localStorage.getItem("token") !== null;
	const [isAuthenticated, setIsAuthenticated] = useState(haveAuthToken);
	const authenticate = (event, userEmail, userPassword) => {
		event.preventDefault();
		const endpoint = "/api/v100/auth/login/";
		const config = {
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
		};
		const data = {
			email: userEmail,
			password: userPassword,
		};
		requests
			.post(endpoint, config, data)
			.then((response) => response.json())
			.then((data) => {
				const token = data["auth_token"];
				localStorage.setItem("token", token);
				setIsAuthenticated(true);
				document.location = "/";
			});
	};
	const logout = () => {
		const endpoint = "/api/v100/auth/logout";
		const token = localStorage.getItem("token");
		const config = {
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${token}`,
			},
		};
		requests.post(endpoint, config, {}).then((response) => {
			localStorage.removeItem("token");
			setIsAuthenticated(false);
		});
	};
	return (
		<div className="App">
			<Navigation isAuthenticated={isAuthenticated} logout={logout} />
			<Main
				isAuthenticated={isAuthenticated}
				authenticate={authenticate}
				logout={logout}
			/>
		</div>
	);
}

export default App;
