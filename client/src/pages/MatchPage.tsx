import React, { useState } from 'react'
import { Button } from "react-bootstrap"

export default function MatchPage(): JSX.Element {
    return (
    <div>
        
        <div className = "mt-8">
        <p>Select 3 majors you are interested in.</p>
        <form>
            <input type="checkbox" id="COS" name="MajorType" value="COS"></input>
            <label htmlFor="COS">COS</label><br></br>
            <input type="checkbox" id="MAT" name="MajorType" value="COS"></input>
            <label htmlFor="MAT">MAT</label><br></br>
            <input type="checkbox" id="ENG" name="MajorType" value="ENG"></input>
            <label htmlFor="ENG">ENG</label><br></br>
        </form>
    </div>

        <div className = "mt-8">
        <p>How many hours are you willing to dedicate per week?</p>
        <form>
            <input type="radio" id="Less than 4" name="classHours" value="Less than 4"></input>
            <label htmlFor="Less than 4">Less than 4</label><br></br>
            <input type="radio" id="4-8" name="classHours" value="4-8"></input>
            <label htmlFor="4-8">4-8</label><br></br>
            <input type="radio" id="More than 8" name="classHours" value="More than 8"></input>
            <label htmlFor="More than 8">More than 8</label><br></br>
        </form>
        </div>

        <div className = "mt-8">
        <p>Have you taken a class in --classname-- before?</p>
        <form>
            <input type="radio" id="Yes" name="takenClass" value="Yes"></input>
            <label htmlFor="Yes">Yes</label><br></br>
            <input type="radio" id="No" name="takenClass" value="No"></input>
            <label htmlFor="No">No</label><br></br>
        </form>
        </div>

        <div className = "mt-8">
        <p>Have you taken a class in --classname-- before?</p>
        <form>
            <input type="submit" value="Submit"/>
        </form>
        </div>


    </div>

    )
}