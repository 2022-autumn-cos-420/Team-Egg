import React from 'react';
import { render, screen } from "@testing-library/react";
import CreateCoursePage from './CreateCoursePage';

describe("CreateCoursePage Components Tests", () => {
    test("Main Containing Element renders", () => {
        render(<CreateCoursePage />);
        const x = screen.getByTestId("createCoursePage");
        expect(x).toBeInTheDocument();
    });
});