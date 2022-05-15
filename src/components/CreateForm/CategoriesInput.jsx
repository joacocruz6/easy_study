import React from "react";
import Form from "react-bootstrap/Form";
import CreatableSelect from "react-select/creatable";

const initial_options = [
	{
		value: "first",
		label: "first",
	},
	{
		value: "second",
		label: "second",
	},
];

const CategoriesInput = () => (
	<>
		<Form.Group className="mb-3" controlId="formCategories">
			<Form.Label>Categories</Form.Label>
			<CreatableSelect isMulti options={initial_options} />
		</Form.Group>
	</>
);

export default CategoriesInput;
