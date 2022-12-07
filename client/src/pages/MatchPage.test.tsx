import React from 'react';
import { render, screen } from '@testing-library/react';
import MatchPage from './MatchPage'

describe("Test", () => {
    test("Renders question 1", () => {
        render(<MatchPage/>);
        const question1 = screen.getByText("How many credit hours do you have available");
        expect(question1).toBeInTheDocument();
    });

    test("Renders question 2 on next button click", () => {
        render(<MatchPage/>);
        const question1 = screen.queryByText("How many credit hours do you have available");
        const question2 = screen.queryByText("Select the majors you are interested in.");
        const nextButton = screen.getByRole("button", {name: "Next"});

        expect(question1).toBeInTheDocument();
        nextButton.click();
        expect(question2).toBeInTheDocument();
    });
});
