import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Placeholder from "react-bootstrap/Placeholder";
import Badge from "react-bootstrap/Badge";
import "./ExerciseDetail.css";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import requests from "../../utils/requests";

const DetailSection = (props) => {
	const sectionTitle = props.title;
	const sectionContent = props.content;
	const eventKey = props.eventKey;

	return (
		<>
			<Accordion.Item className="accordion-item" eventKey={eventKey}>
				<Accordion.Header>{sectionTitle}</Accordion.Header>
				<Accordion.Body>{sectionContent}</Accordion.Body>
			</Accordion.Item>
		</>
	);
};

const ExerciseDetail = (props) => {
	const defaultActiveKey = ["0", "1"];
	const { exercise_uuid } = useParams();
	const [title, setTitle] = useState("");
	const [categories, setCategories] = useState([]);
	const [description, setDescription] = useState("");
	const [content, setContent] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [system, setSystem] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const url = `/api/v100/learning_object/${exercise_uuid}`;
		const config = {
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		};
		requests
			.get(url, config)
			.then((response) =>
				response.ok ? response.json() : new Error("Server error")
			)
			.then((data) => {
				let categories = [];
				setTitle(data.title);
				data.categories.forEach((category) =>
					categories.push(category.name)
				);
				setCategories(categories);
				setDescription(data.description);
				setContent(data.content);
				setEmail(data.creator_email);
				let date = new Date(data.created_at);
				setDate(date.toDateString());
				setSystem(data.system);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	const header = isLoading ? (
		<>
			<Placeholder animation="glow">
				<Placeholder xs={7} />
			</Placeholder>
		</>
	) : (
		title
	);
	const categoriesSection = isLoading ? (
		<>
			<Placeholder animation="glow">
				<Placeholder className="button" xs={1} size="xs" />
				<Placeholder className="button" xs={1} size="xs" />
				<Placeholder className="button" xs={1} size="xs" />
			</Placeholder>
		</>
	) : (
		categories.map((category) => (
			<Badge className="button" pill bg="dark">
				{category}
			</Badge>
		))
	);
	const descriptionSection = isLoading ? (
		<>
			<Placeholder animation="glow">
				<Placeholder xs={4} />
				<Placeholder xs={7} />
				<Placeholder xs={5} />
			</Placeholder>
		</>
	) : (
		description
	);
	const contentSection = isLoading ? (
		<>
			<Placeholder animation="glow">
				<Placeholder xs={7} /> <Placeholder xs={5} />{" "}
				<Placeholder xs={10} />{" "}
			</Placeholder>
		</>
	) : (
		content
	);
	const leftFooter = isLoading ? (
		<Placeholder animation="glow">
			<Placeholder xs={10} />
		</Placeholder>
	) : (
		email
	);
	const centerFooter = isLoading ? (
		<Placeholder animation="glow">
			<Placeholder xs={10} />
		</Placeholder>
	) : (
		date
	);
	const rightFooter = isLoading ? (
		<Placeholder animation="glow">
			<Placeholder xs={10} />
		</Placeholder>
	) : (
		system
	);

	const downloadButton = isLoading ? (
		<Placeholder animation="glow">
			<Placeholder.Button className="button" variant="success" xs={2} />
		</Placeholder>
	) : (
		<Button className="button" variant="success">
			Download
		</Button>
	);
	const forkButton = isLoading ? (
		<Placeholder animation="glow">
			<Placeholder.Button className="button" variant="primary" xs={2} />
		</Placeholder>
	) : (
		<Button className="button" variant="primary">
			Fork
		</Button>
	);

	return (
		<>
			<Card className="card">
				<Card.Header>
					<b>{header}</b>
				</Card.Header>

				<Card.Body>
					<Accordion defaultActiveKey={defaultActiveKey} alwaysOpen>
						<DetailSection
							eventKey="0"
							title="Categories"
							content={categoriesSection}
						/>
						<DetailSection
							eventKey="1"
							title="Description"
							content={descriptionSection}
						/>
						<DetailSection
							eventKey="2"
							title="Content"
							content={contentSection}
						/>
					</Accordion>
					{downloadButton}
					{forkButton}
					<Button
						href="/exercises/all"
						className="button button-right"
						variant="danger"
					>
						Go back
					</Button>
				</Card.Body>
				<Card.Footer className="card-footer">
					<p className="card-left-footer">{leftFooter}</p>
					<p className="card-center-footer">{centerFooter}</p>
					<p className="card-right-footer">{rightFooter}</p>
				</Card.Footer>
			</Card>
		</>
	);
};

export default ExerciseDetail;
