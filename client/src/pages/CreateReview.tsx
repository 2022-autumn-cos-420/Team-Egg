import React, { useState } from 'react'
import { Button } from "react-bootstrap"

export default function CreateReview(): JSX.Element {
    
    return(
        <div>
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
            </form><br></br>

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
            </form><br></br>


        </div>
    );
}

