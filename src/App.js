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

const Main = (props) => {
	const isAuthenticated = props.isAuthenticated;
	let routes = (
		<>
			<Route path="/" element={<AnonymousLanding />}></Route>
			<Route path="account/create" element={<CreateAccountForm />} />
			<Route path="login" element={<LoginPage />} />
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
	const isAuthenticated = false;
	return (
		<div className="App">
			<Navigation isAuthenticated={isAuthenticated} />
			<Main isAuthenticated={isAuthenticated} />
		</div>
	);
}

export default App;
