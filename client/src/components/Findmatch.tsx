import React, { useState } from 'react'
import { Button } from "react-bootstrap"

export default function FindMatch(): JSX.Element {
    const [inProg, setInProg] = useState<boolean>(false);
    
    function startMatch(): void {
        setInProg(true);
    }

    return(
        <div>
            <Button disabled = {inProg} onClick = {() => startMatch()}>Find a match</Button>
        </div>
    );
}