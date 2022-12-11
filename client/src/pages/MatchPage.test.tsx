import React from 'react';
import { render, screen } from '@testing-library/react';
import MatchPage from './MatchPage'

describe("Test", () => {
    test("Renders question 1", () => {
        render(<MatchPage/>);
        const question1 = screen.getByText(/Select the majors you are interested in./i);
        expect(question1).toBeInTheDocument();
    });

    test("Renders question 2 on next button click", () => {
        render(<MatchPage/>);
        const question1 = screen.queryByText(/Select the majors you are interested in./i);
        const nextButton = screen.getByRole("button", {name: "Next"});

        expect(question1).toBeInTheDocument();
        nextButton.click();
        const question2 = screen.queryByText(/how many hours are you willing to deidcate to your courses per week?/i);
        expect(question2).toBeInTheDocument();
    });
});
