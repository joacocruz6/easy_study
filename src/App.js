import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar/Navbar.jsx";
import ExerciseList from "./components/Exercises/ExerciseList/ExerciseList";
import CreateForm from "./components/CreateForm/CreateForm.jsx";

const Main = () => {
	return (
		<div className="main">
			<CreateForm />
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
