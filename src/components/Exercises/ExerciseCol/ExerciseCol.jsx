import React from "react";
import Col from "react-bootstrap/Col";
import ExerciseCard from "../ExerciseCard/ExerciseCard.jsx";
import LoadingExerciseCard from "../ExerciseCard/LoadingExerciseCard.jsx";
const ExerciseCol = () => {
    return (
        <>
            <Col>
                <ExerciseCard />
            </Col>
        </>
    );  
};

export default ExerciseCol;