import React from 'react';
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateReview from './CreateReview';

describe("CreateReview Components Tests", () => {  
    test("Second page is hidden", () => {
        render(<CreateReview />);
        const hiddenText = screen.queryByText(/Back/);
        expect(hiddenText).toBeNull();
    });

});