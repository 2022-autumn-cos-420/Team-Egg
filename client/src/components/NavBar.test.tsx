import React from 'react';
import { render, screen } from '@testing-library/react';
import {User} from "../interfaces/User";
import NavBar, { SignedInMessage } from './Navbar';
jest.mock("../firebase-config");


describe("NavBar Tests", () => {
    const nonUser : User | null = null;
    const johnUser : User | null = {
        displayname: "John Doe",
        email: "fakeemail@email.com",
        uid: "abc"
    }

    afterAll(() => {
        jest.resetAllMocks();
      });

    test("Renders Sign In Message Component", () => {
        render(<NavBar/>);
        const x = screen.getByTestId("signedInMessage");
        expect(x).toBeInTheDocument();
    });

    test("Renders that the user is not signed in", () => {
        render(<SignedInMessage isAuth={false} user={nonUser}/>);

        const x = screen.getByTestId("signedInMessage");
        expect(x).toHaveTextContent("Not Signed In");
    });

    test("Renders the user's name when signed in", () => {
        render(<SignedInMessage isAuth={true} user={johnUser}/>);
        const x = screen.getByTestId("signedInMessage");
        expect(x).toHaveTextContent("Signed in as John Doe");
    });
});
