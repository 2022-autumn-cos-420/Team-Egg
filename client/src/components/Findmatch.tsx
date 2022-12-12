import React, { useState } from 'react'
import { Button } from "react-bootstrap"

export default function FindMatch(): JSX.Element {
    const [inProg, setInProg] = useState<boolean>(false);
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const questionsList = ["Question 1", "Question 2", "Question 3", "Question 4"]


    function handleMatchClick(): void {
        const matchButton = document.getElementById("match-button");
        if(matchButton)
        setInProg(!inProg);
    }

    function handleNextQuestionClick(): void {
        if(questionIndex !== questionsList.length -1){
            setQuestionIndex(questionIndex + 1);
        }
    }

    return(
        <><div>
            <Button id="match-button" onClick={() => handleMatchClick()}>Find a match</Button>
            {inProg &&
        <div><Button id="next-button" onClick={() => handleNextQuestionClick()}>Next Question</Button> 
            {inProg && <div>{questionsList[questionIndex]}</div>}
        </div>}
        </div></>
    );
}