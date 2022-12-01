import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './Navbar'

describe("NavBar Tests", () => {


    test("Renders Sign In Message Component", () => {
        render(<NavBar/>);
        const x = screen.getByTestId("signedInMessage");
        expect(x).toBeInTheDocument();
    });

});
