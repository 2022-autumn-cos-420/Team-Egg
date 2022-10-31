import React, { useState } from 'react'
import { Button } from "react-bootstrap"

export default function FindMatch(): JSX.Element {
    const [inProg, setInProg] = useState<boolean>(false);
    
    function startMatch(): void {
        setInProg(!inProg);

    }

    return(
        <div>
            <Button className = "match-button" disabled = {inProg} onClick = {() => startMatch()}>Find a match</Button>
            {inProg && <div>What is your major?</div>}
        </div>
    );
}