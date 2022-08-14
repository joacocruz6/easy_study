import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import requests from "../../../utils/requests";
import "./SearchBar.css";

const SearchBar = (props) => {
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [availableCategories, setAvailableCategories] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [hasNextPage, setHasNextPage] = useState(true);
	const [isLoadingCategories, setIsLoadingCategories] = useState(true);
	const loadHandler = props.loadHandler;

	const search = () => {
		const categories = [];
		selectedCategories.forEach((category) =>
			categories.push(category.value)
		);
		loadHandler(categories);
	};

	const loadCategories = () => {
		const searchParams = new URLSearchParams({ page_number: pageNumber });
		const endpoint = "/api/v100/category/?" + searchParams.toString();
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		if (hasNextPage) {
			setIsLoadingCategories(true);
			requests
				.get(endpoint, config)
				.then((response) => response.json())
				.then((data) => {
					let categoriesNames = availableCategories;
					data["categories"].forEach((category) =>
						categoriesNames.push({
							value: category["name"],
							label: category["name"],
						})
					);
					setHasNextPage(data["has_next_page"]);
					if (data["has_next_page"]) {
						setPageNumber(pageNumber + 1);
					}
					setAvailableCategories(categoriesNames);
					setIsLoadingCategories(false);
				});
		}
	};
	useEffect(loadCategories, []);

	return (
		<>
			<div className="search-bar">
				<Select
					isMulti
					onChange={(value) => setSelectedCategories(value)}
					isLoading={isLoadingCategories}
					onMenuScrollBottom={loadCategories}
					options={availableCategories}
					placeholder={"Search by category name"}
				/>
			</div>
			<div>
				<Button onClick={search}>Search</Button>
			</div>
		</>
	);
};

export default SearchBar;
