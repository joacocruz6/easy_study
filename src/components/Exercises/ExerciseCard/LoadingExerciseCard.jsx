import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Placeholder from "react-bootstrap/Placeholder";
import "./ExerciseCard.css";

const LoadingExerciseCard = () => {
    return (
        <>
            <Card className="ExerciseCard">
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder style={{ "text-align": "left" }} as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button style={{margin: "4px"}} variant="primary" xs={4} />
                    <Placeholder.Button variant="success" xs={4} />
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                </Card.Footer>
            </Card>
        </>
    );
};

export default LoadingExerciseCard;