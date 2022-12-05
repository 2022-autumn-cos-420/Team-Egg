import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfilePage from './ProfilePage'

describe("Profile Tests", () => {

    test("Renders Profile title component", () => {
        render(<ProfilePage />);
        const x = screen.getByTestId("profileTitleComponent");
        expect(x).toBeInTheDocument();
    });
    test("Renders Profile sidebar component", () => {
        render(<ProfilePage />);
        const x = screen.getByTestId("profilesidebarComponent");
        expect(x).toBeInTheDocument();
    });
    test("Renders Profile content component", () => {
        render(<ProfilePage />);
        const x = screen.getByTestId("profilecontentComponent");
        expect(x).toBeInTheDocument();
    });



});
