import { match } from 'assert';
import React, { useState } from 'react'
import { Button } from "react-bootstrap"

export default function FindMatch(): JSX.Element {
    const [inProg, setInProg] = useState<boolean>(false);
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const questionsList = ["Question 1", "Question 2", "Question 3", "Question 4"]


    function startMatch(): void {
        setInProg(!inProg);
    }

    function nextQuestion(): void {
        if(questionIndex != questionsList.length -1){
            setQuestionIndex(questionIndex + 1);
        }
    }

    return(
        <><div>
            <Button className="match-button" disabled={inProg} onClick={() => startMatch()}>Find a match</Button>
        </div>
        
        <div><Button className="next-button" disabled={!inProg} onClick={() => nextQuestion()}>Next Question</Button> 
            {inProg && <div>{questionsList[questionIndex]}</div>}
        </div></>
    );
}