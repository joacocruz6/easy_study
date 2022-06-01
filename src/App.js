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

const Main = () => {
	return (
		<div className="main">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="exercises">
						<Route path="create" element={<CreateForm />} />
						<Route path="all" element={<ExerciseList />} />
						<Route
							path=":exercise_uuid"
							element={<ExerciseDetail />}
						/>
						<Route path="my_exercises" element={<ExerciseList />} />
					</Route>
					<Route path="login" element={<LoginPage />} />
					<Route path="profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<Navigation />
			<Main />
		</div>
	);
}

export default App;
