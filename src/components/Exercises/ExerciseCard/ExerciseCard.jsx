import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ExerciseCard.css";

const ExerciseCard = () => {
    return (
        <>
            <Card className="ExerciseCard">
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text style={{"text-align": "left"}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button className="ExerciseButton" variant="primary" style={{margin: "4px"}}>Check on web</Button>
                    <Button className="ExerciseButton" variant="success">Download</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </>
    );
};

export default ExerciseCard;