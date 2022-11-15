import React, { useState } from 'react'
import { Button } from "react-bootstrap"

export default function CreateReview(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);
    function flipVisibility(): void{
        setVisible(!visible);
    }
    return(
        <div>
            {visible && <div>
                <div>To ensure that you answer honestly,you may choose your level of anonymity before posting this review</div>
           
                <div className = "mt-8">
                    <p>How did the class meet for lectures?</p>
                    <form>
                        <input type="radio" id="In Person" name="lectureStyle" value="In Person"></input>
                        <label htmlFor="In Person">In Person</label><br></br>
                        <input type="radio" id="Online Synchronous" name="lectureStyle" value="Online Synchronous"></input>
                        <label htmlFor="Online Synchronous">Online Synchronous</label><br></br>
                        <input type="radio" id="Online Asynchronous" name="lectureStyle" value="Online Asynchronous"></input>
                        <label htmlFor="Online Asynchronous">Online Asynchronous</label><br></br>
                        <input type="radio" id="Mixed" name="lectureStyle" value="Mixed"></input>
                        <label htmlFor="Mixed">Mixed</label><br></br>
                    </form>
                </div>

                <div className = "mt-8">
                    <p>How many students were in your class?</p>
                    <form>
                        <input type="radio" id="Less than 10" name="classSize" value="Less than 10"></input>
                        <label htmlFor="Less than 10">Less than 10</label><br></br>
                        <input type="radio" id="10-25" name="classSize" value="10-25"></input>
                        <label htmlFor="10-25">10-25</label><br></br>
                        <input type="radio" id="26-50" name="classSize" value="26-50"></input>
                        <label htmlFor="26-50">26-50</label><br></br>
                        <input type="radio" id="51-100" name="classSize" value="51-100"></input>
                        <label htmlFor="51-100">51-100</label><br></br>
                        <input type="radio" id="Over 100" name="classSize" value="Over 100"></input>
                        <label htmlFor="Over 100">Over 100</label><br></br>
                    </form>
                </div>

                <div className = "mt-8">
                    <p>How difficult were this course's exams?</p>
                    <form>
                        <input type="radio" id="There were no exams" name="examDifficulty" value="There were no exams"></input>
                        <label htmlFor="There were no exams">There were no exams</label><br></br>
                        <input type="radio" id="Easy" name="examDifficulty" value="Easy"></input>
                        <label htmlFor="Easy">Easy</label><br></br>
                        <input type="radio" id="Moderate" name="examDifficulty" value="Moderate"></input>
                        <label htmlFor="Moderate">Moderate</label><br></br>
                        <input type="radio" id="Difficult" name="examDifficulty" value="Difficult"></input>
                        <label htmlFor="Difficult">Difficult</label><br></br>
                        <input type="radio" id="Very Difficult" name="examDifficulty" value="Very Difficult"></input>
                        <label htmlFor="Very Difficult">Very Difficult</label><br></br>
                    </form>
                </div>

                <div className = "mt-8">
                    <p>How difficult was it to learn this course's material?</p>
                    <form>
                    <input type="radio" id="Easy" name="contentDifficulty" value="Easy"></input>
                        <label htmlFor="Easy">Easy</label><br></br>
                        <input type="radio" id="Moderate" name="contentDifficulty" value="Moderate"></input>
                        <label htmlFor="Moderate">Moderate</label><br></br>
                        <input type="radio" id="Difficult" name="contentDifficulty" value="Difficult"></input>
                        <label htmlFor="Difficult">Difficult</label><br></br>
                        <input type="radio" id="Very Difficult" name="contentDifficulty" value="Very Difficult"></input>
                        <label htmlFor="Very Difficult">Very Difficult</label><br></br>
                    </form>
                </div>

                <div className = "mt-8">
                    <p>How many hours per week did you spend on this class?</p>
                    <form>
                        <input type="radio" id="Less than 1" name="hoursPerWeek" value="Less than 1"></input>
                        <label htmlFor="Less than 1">Less than 1</label><br></br>
                        <input type="radio" id="1-2" name="hoursPerWeek" value="1-2"></input>
                        <label htmlFor="1-2">1-2</label><br></br>
                        <input type="radio" id="2-4" name="hoursPerWeek" value="2-4"></input>
                        <label htmlFor="2-4">2-4</label><br></br>
                        <input type="radio" id="4-8" name="hoursPerWeek" value="4-8"></input>
                        <label htmlFor="4-8">4-8</label><br></br>
                        <input type="radio" id="8-15" name="hoursPerWeek" value="8-15"></input>
                        <label htmlFor="8-15">8-15</label><br></br>
                        <input type="radio" id="15 or more" name="hoursPerWeek" value="15 or more"></input>
                        <label htmlFor="15 or more">15 or more</label><br></br>
                    </form>
                </div>

                <div className = "mt-8">
                    <p>Overall, how much did you enjoy taking this course?</p>
                    <form>
                        <input type="radio" id="I didn't enjoy this course at all" name="overallEnjoyment" value="I didn't enjoy this course at all"></input>
                        <label htmlFor="I didn't enjoy this course at all">I didn't enjoy this course at all</label><br></br>
                        <input type="radio" id="I didn't enjoy this class" name="overallEnjoyment" value="I didn't enjoy this class"></input>
                        <label htmlFor="I didn't enjoy this class">I didn't enjoy this class</label><br></br>
                        <input type="radio" id="I have neutral feelings about this course" name="overallEnjoyment" value="I have neutral feelings about this course"></input>
                        <label htmlFor="I have neutral feelings about this course">I have neutral feelings about this course</label><br></br>
                        <input type="radio" id="I enjoyed taking this course" name="overallEnjoyment" value="I enjoyed taking this course"></input>
                        <label htmlFor="I enjoyed taking this course">I enjoyed taking this course</label><br></br>
                        <input type="radio" id="I really enjoyed taking this course" name="overallEnjoyment" value="I really enjoyed taking this course"></input>
                        <label htmlFor="I really enjoyed taking this course">I really enjoyed taking this course</label><br></br>
                    </form>
                </div>
                <Button onClick={flipVisibility}>Next</Button>
            </div>}
            {!visible && <div>
                <div className = "mt-8">
                    <p>What is your completion status in this course?</p>
                    <form>
                        <input type="radio" id="Passed" name="completionStatus" value="Passed"></input>
                        <label htmlFor="Passed">Passed</label><br></br>
                        <input type="radio" id="Failed" name="completionStatus" value="Failed"></input>
                        <label htmlFor="Failed">Failed</label><br></br>
                        <input type="radio" id="Still Taking" name="completionStatus" value="Still Taking"></input>
                        <label htmlFor="Still Taking">Still Taking</label><br></br>
                        <input type="radio" id="Dropped" name="completionStatus" value="Dropped"></input>
                        <label htmlFor="Dropped">Dropped</label><br></br>
                        <input type="radio" id="Prefer Not to Say" name="completionStatus" value="Prefer Not to Say"></input>
                        <label htmlFor="Prefer Not to Say">Prefer Not to Say</label><br></br>
                    </form>
                </div>
                <Button onClick={flipVisibility}>Back</Button>
            </div>}
        </div>
    );
}

