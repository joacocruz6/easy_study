const handleInput = (stateChangeFunction) => {
	return (event) => {
		const target = event.target;
		const value = target.value;
		stateChangeFunction(value);
	};
};

export default handleInput;
