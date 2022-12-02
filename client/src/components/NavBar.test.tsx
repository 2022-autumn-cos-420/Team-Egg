import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar, { SignedInMessage } from './Navbar';
import {auth} from "../firebase-config";
jest.mock("../firebase-config");


describe("NavBar Tests", () => {
    afterAll(() => {
        jest.resetAllMocks();
      });

    test("Renders Sign In Message Component", () => {
        render(<NavBar/>);
        const x = screen.getByTestId("signedInMessage");
        expect(x).toBeInTheDocument();
    });

    test("Renders that the user is not signed in", () => {
        render(<SignedInMessage isAuth={false} currentUser={null}/>);

        const x = screen.getByTestId("signedInMessage");
        expect(x).toHaveTextContent("Not Signed In");
    });

    test("Renders the user's name when signed in", () => {
        render(<SignedInMessage isAuth={true} currentUser={"John Doe"}/>);
        const x = screen.getByTestId("signedInMessage");
        expect(x).toHaveTextContent("Signed in as John Doe");
    });
});
