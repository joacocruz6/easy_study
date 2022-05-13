import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SelectedNavigationIteam = (props) => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<a href={props.link}>{props.text}</a>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SelectedNavigationIteam;
