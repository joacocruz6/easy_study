import React from "react";
import Form from "react-bootstrap/Form";
import CreatableSelect from "react-select/creatable";

const CategoriesInput = (props) => {
	const onChangeHandle = props.onChangeHandle;
	const categoriesLoadHandle = props.categoriesLoad;
	const options = props.categoryOptions;
	const isLoading = props.isLoading;
	const onChange = (value) => onChangeHandle(value);
	return (
		<>
			<Form.Group className="mb-3" controlId="formCategories">
				<Form.Label>Categories</Form.Label>
				<CreatableSelect
					isMulti
					options={options}
					onChange={onChange}
					onMenuScrollToBottom={categoriesLoadHandle}
					isLoading={isLoading}
				/>
			</Form.Group>
		</>
	);
};
export default CategoriesInput;
