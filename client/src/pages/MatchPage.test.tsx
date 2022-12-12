import React from 'react';
import { render, screen } from '@testing-library/react';
import MatchPage from './MatchPage'
import { BrowserRouter } from 'react-router-dom';

describe("Test", () => {
    test("Renders question 1", () => {
        render(<BrowserRouter><MatchPage/></BrowserRouter>);
        const question1 = screen.getByText(/Select the majors you are interested in./i);
        expect(question1).toBeInTheDocument();
    });

    test("Renders question 2 on next button click", () => {
        render(<BrowserRouter><MatchPage/></BrowserRouter>);
        const question1 = screen.queryByText(/Select the majors you are interested in./i);
        const nextButton = screen.getByRole("button", {name: "Next"});

        expect(question1).toBeInTheDocument();
        nextButton.click();
        const question2 = screen.queryByText(/how many hours are you willing to dedicate to your courses per week?/i);
        expect(question2).toBeInTheDocument();
    });

    test("Renders submit button when showing last question", () => {
        render(<BrowserRouter><MatchPage/></BrowserRouter>);
        const nextButton = screen.getByRole("button", {name: "Next"});
        const submitButton = screen.getByTestId("Submit Button");
        nextButton.click();
        nextButton.click();
        //Theres only 3 questions so just click the next button twice

        expect(submitButton).toBeInTheDocument();
    })

});
