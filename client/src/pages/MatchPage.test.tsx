import React from 'react';
import { render, screen } from '@testing-library/react';
import MatchPage from './MatchPage'

describe("Test", () => {
    test("Renders question 1", () => {
        render(<MatchPage/>);
        const question1 = screen.getByText(/Select 3 majors you are interested in./i);
        expect(question1).toBeInTheDocument();
    });

    test("Renders question 2 on next button click", () => {
        render(<MatchPage/>);
        const question1 = screen.queryByText(/Select 3 majors you are interested in./i);
        const question2 = screen.queryByText("How many hours are you willing to dedicate per week?");
        const nextButton = screen.getByRole("button", {name: "Next"});

        expect(question1).toBeInTheDocument();
        nextButton.click();
        expect(question2).toBeInTheDocument();
    });
});
