import React from 'react';
import { render, screen } from '@testing-library/react';
import MatchPage from './MatchPage'

describe("Test", () => {
    test("Renders question 1", () => {
        render(<MatchPage/>);
        const question1 = screen.getByText(/Select 3 majors you are interested in./i);
        expect(question1).toBeInTheDocument();
    });

    test("Renders checkboxes for question 1", () => {
        render(<MatchPage/>);
        const checkboxes = screen.getByRole("checkbox");
        expect(checkboxes).toBeInTheDocument();
    })
})