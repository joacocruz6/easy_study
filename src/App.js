import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar/Navbar.jsx";
import ExerciseList from "./components/Exercises/ExerciseList/ExerciseList";

const Main = () => {
	return (
		<div className="main">
			<ExerciseList />
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
