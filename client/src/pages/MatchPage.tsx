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
                setMajorsList(majorsList.filter((event) => event !== major));
            } else {
                setMajorsList([...majorsList, major]);
            }
        }

    return(
        <div>
        <h3>Select the majors you are interested in.</h3>
        <Form.Group controlId="desiredMajors">
            {ALL_MAJORS.map((major: string) => (
                <FormCheck
                className="p-1"
                key={major}
                type="checkbox"
                name="major"
                value={major}
                label={major}
                onChange={updateList}
                checked={majorsList.includes(major)}
                />  
            ))}
            </Form.Group>
        </div>
    )
}

export function HoursOutsideClass({
    hoursOutside,
    setHoursOutside,
}: {hoursOutside: number,
    setHoursOutside: (hours: number) => void
    }): JSX.Element {
    return(
        <div>
        <Form.Group controlId="formCreditHours">
            <Form.Label><div>Outside of class, how many hours are you willing to deidcate to your courses per week?</div></Form.Label>
                <Form.Control
                className="border-2 border-black p-1 text-center rounded-md w-[50px]"
                type="number"
                value={hoursOutside}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    let x = parseInt(event.target.value)
                isNaN(x) ? setHoursOutside(0) : setHoursOutside(x)
                }
            }
      />
    </Form.Group>
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
        <div hidden = {questionNumber !== 2} className = "mt-8"><MajorTypes majorsList={majors} setMajorsList={setMajors}/></div>
        <div hidden = {questionNumber !== 3} className = "mt-8"><HoursOutsideClass hoursOutside={hoursOutside} setHoursOutside={setHoursOutside}/></div>

        <Button hidden = {questionNumber === 1 || submitted === true} className = "m-4 bg-crt_BB_lightBlue hover:bg-crt_BB_darkBlue text-white font-bold py-2 px-4 rounded-full" onClick = {() => previousQuestion()}>Previous</Button>
        <Button hidden = {questionNumber === 3 || submitted === true} className = "m-4 px-6 bg-crt_BB_lightBlue hover:bg-crt_BB_darkBlue text-white font-bold py-2 px-4 rounded-full" onClick = {() => nextQuestion()}>Next</Button>
        <Button hidden = {questionNumber !== 3 || submitted === true} className = "px-6 bg-crt_BB_lightBlue hover:bg-crt_BB_darkBlue text-white font-bold py-2 px-4 rounded-full" onClick = {() => handleSubmit()}>Submit</Button>
    </div>

    )
}