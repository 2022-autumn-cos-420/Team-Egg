import React, { useState } from 'react'
import { Button } from "react-bootstrap"

export default function CreateReview(): JSX.Element {
    
    return(
        <div>
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
    );
}

