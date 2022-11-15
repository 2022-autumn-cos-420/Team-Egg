import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe("Test", () => {
    test("Renders Home Page Text", () => {
        render(<HomePage/>);
        const question1 = screen.getByText("Home Page");
        expect(question1).toBeInTheDocument();
    });
});
