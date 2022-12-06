import React, { useState } from 'react'
import { Button, Form, FormCheck } from "react-bootstrap"
import { Match } from '../interfaces/Match'

const ALL_MAJORS = ["COS", "MAT", "ENG", "NMD", "PHY", "CHY", "ECO", "PSY", "EDU", "FSN", "NUR", "POS"]
export function CreditHoursAvailable({
    creditHoursAvailable,
    setCreditHoursAvailable,
}: {creditHoursAvailable: number,
    setCreditHoursAvailable: (hours: number) => void
    }): JSX.Element {
    return (
        <div>
        <Form.Group controlId="formCreditHours">
            <Form.Label><div>How many credit hours do you have available?</div></Form.Label>
                <Form.Control
                className="border-2 border-black p-1 text-center rounded-md w-[50px]"
                type="number"
                value={creditHoursAvailable}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    let x = parseInt(event.target.value)
                isNaN(x) ? setCreditHoursAvailable(0) : setCreditHoursAvailable(x)
                }
            }
      />
    </Form.Group>
    </div>
    )
}

export function MajorTypes({
    majorsList,
    setMajorsList,
}: {majorsList: string[],
    setMajorsList: (majors: string[]) => void
    }): JSX.Element {
        function updateList(event: React.ChangeEvent<HTMLInputElement>) {
            const major = event.target.value;
            if (majorsList.includes(major)) {
                // Remove the given value
                setMajorsList(majorsList.filter((event) => event !== major));
            } else {
                // Append the given value
                setEmotions([...emotions, emotion]);
            }
        }
    return(
        <div>
        <Form.Group controlId="desiredMajors">
            {ALL_MAJORS.map((major: string) => (
                <FormCheck
                key={major}
                type="checkbox"
                name="major"

                />
            ))}
            </Form.Group>
        </div>
    )
}

export function HoursOutsideClass(): JSX.Element {
    return(
        <div>
        <p>Outside of class, how many hours are you willing to deidcate to your courses per week?</p>
        <form>
            <input type="radio" id="Yes" name="takenClass" value="Yes"></input>
            <label htmlFor="Yes">Yes</label><br></br>
            <input type="radio" id="No" name="takenClass" value="No"></input>
            <label htmlFor="No">No</label><br></br>
        </form>
        </div>
    )
}

export default function MatchPage(): JSX.Element {
    const [questionNumber, setQuestionNumber] = useState<number>(1);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [creditHoursAvailable, setCreditHoursAvailable] = useState<number>(0);
    const [majors, setMajors] = useState<string[]>([]);
    const [hoursOutside, setHoursOutside] = useState<number>(0);

    function nextQuestion(): void {

        setQuestionNumber(questionNumber + 1);
    }

    function previousQuestion(): void {

        setQuestionNumber(questionNumber - 1);
    }

    function handleSubmit(): void {

        nextQuestion();
        setSubmitted(true);
    }

    return (
    
    <div>
        <div hidden = {questionNumber !== 1} className = "mt-8"><CreditHoursAvailable creditHoursAvailable={creditHoursAvailable} setCreditHoursAvailable={setCreditHoursAvailable} /></div>
        <div hidden = {questionNumber !== 2} className = "mt-8"><MajorTypes/></div>
        <div hidden = {questionNumber !== 3} className = "mt-8"><HoursOutsideClass/></div>

        <Button hidden = {questionNumber === 1 || submitted === true} className = "m-4 bg-crt_BB_lightBlue hover:bg-crt_BB_darkBlue text-white font-bold py-2 px-4 rounded-full" onClick = {() => previousQuestion()}>Previous</Button>
        <Button hidden = {questionNumber === 3 || submitted === true} className = "m-4 px-6 bg-crt_BB_lightBlue hover:bg-crt_BB_darkBlue text-white font-bold py-2 px-4 rounded-full" onClick = {() => nextQuestion()}>Next</Button>
        <Button hidden = {questionNumber !== 3 || submitted === true} className = "px-6 bg-crt_BB_lightBlue hover:bg-crt_BB_darkBlue text-white font-bold py-2 px-4 rounded-full" onClick = {() => handleSubmit()}>Submit</Button>
    </div>

    )
}