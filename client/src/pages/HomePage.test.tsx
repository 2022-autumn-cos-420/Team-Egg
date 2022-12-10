import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe("HomePageTesting", () => {
    test("Rendsers Welcome Message Component", () => {
        render(<HomePage/>);
        const x = screen.getByTestId("welcomeMessage");
        expect(x).toBeInTheDocument();
    });
});
