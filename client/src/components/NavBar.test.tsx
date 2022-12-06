import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar, { SignedInMessage } from './Navbar';
import {User} from "../interfaces/User";


describe("NavBar Tests", () => {
    const nullUser : User | null = null;
    const JohnUser : User | null = {
        uid: "abc",
        eduEmail: false,
        preferences: [],
        name: "John User",
        accessLevel: 0
    }
    const SuperUser : User | null = {
        uid: "def",
        eduEmail: true,
        preferences: [],
        name: "Superman",
        accessLevel: 10
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
        render(<SignedInMessage currentUser={null}/>);

        const x = screen.getByTestId("signedInMessage");
        expect(x).toHaveTextContent("Not Signed In");
    });

    test("Renders the user's name when signed in", () => {
        render(<SignedInMessage currentUser={JohnUser}/>);
        const x = screen.getByTestId("signedInMessage");
        expect(x).toHaveTextContent("Signed in as John User");
    });
});
