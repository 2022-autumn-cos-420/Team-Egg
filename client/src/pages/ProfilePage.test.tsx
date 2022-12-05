import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfilePage from './ProfilePage'
import {User} from "../interfaces/User";

describe("Profile Tests", () => {

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

    test("Renders Profile title component", () => {
        render(<ProfilePage currentUser={JohnUser}/>);
        const x = screen.getByTestId("profileTitleComponent");
        expect(x).toBeInTheDocument();
    });
    test("Renders Profile sidebar component", () => {
        render(<ProfilePage currentUser={JohnUser}/>);
        const x = screen.getByTestId("profileSidebarComponent");
        expect(x).toBeInTheDocument();
    });
    test("Renders Profile content component", () => {
        render(<ProfilePage currentUser={JohnUser}/>);
        const x = screen.getByTestId("profileContentComponent");
        expect(x).toBeInTheDocument();
    });
    test("Renders user name in profile if signed in", () => {
        render(<ProfilePage currentUser={JohnUser}/>);
        const x = screen.queryByText("John User Profile");
        expect(x).toBeInTheDocument();
    });
    test("Renders 'you are not signed in' if user is not signed in", () => {
        render(<ProfilePage currentUser={nullUser}/>);
        const x = screen.queryByText("You are not signed in");
        expect(x).toBeInTheDocument();
    });
    test("Renders the createCourseLink component if the user has enough access level", () => {
        render(<ProfilePage currentUser={SuperUser}/>);
        const x = screen.getByTestId("createCourseLink");
        expect(x).toBeInTheDocument();
    });
    test("Does not render createCourseLink if the user doesn't have enough access level", () => {
        render(<ProfilePage currentUser={JohnUser}/>);
        const x = screen.getByTestId("createCourseLink");
        expect(x).toNotBeInTheDocument();
    });


});
