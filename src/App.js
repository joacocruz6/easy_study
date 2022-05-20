import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar/Navbar.jsx";
import ExerciseList from "./components/Exercises/ExerciseList/ExerciseList";
import CreateForm from "./components/CreateForm/CreateForm.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
	return (
		<div className="main">
			<BrowserRouter>
				<Routes>
					<Route path="exercises">
						<Route path="create" element={<CreateForm />} />
						<Route path="all" element={<ExerciseList />} />
					</Route>
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
