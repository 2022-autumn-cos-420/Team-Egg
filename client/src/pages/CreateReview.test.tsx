import React from 'react';
import { act, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateReview from './CreateReview';

describe("CreateReview Components Tests", () => {  
    test("Second page is hidden", () => {
        render(<CreateReview />);
        const hiddenText = screen.queryByText(/Back/);
        expect(hiddenText).toBeNull();
    });
    test("First page is hidden after Next button is clicked", () => {
        render(<CreateReview />);
        const nextButton = screen.getByTestId("ReviewNextButton1"); 
        act(() => {
            nextButton.click();
          });
        const hiddenText = screen.queryByText(/How did the class meet for lectures/i);
        expect(hiddenText).toBeNull();
    })
    test("Render page three", () => {
        render(<CreateReview />);
        const nextButton = screen.getByTestId("ReviewNextButton1");
        act(() => {
            nextButton.click();
          });
        const nextButton2 = screen.getByTestId("ReviewNextButton2");
        act(() => {
            nextButton2.click();
        })
        const hiddenText = screen.queryByText(/Next/);
        expect(hiddenText).toBeNull();
    })

});