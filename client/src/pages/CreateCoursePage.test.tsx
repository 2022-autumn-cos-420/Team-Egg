import React from 'react';
import { render, screen } from "@testing-library/react";
import CreateCoursePage from './CreateCoursePage';

describe("CreateCoursePage Components Tests", () => {
    test("Main Containing Element renders", () => {
        render(<CreateCoursePage />);
        const x = screen.getByTestId("createCoursePage");
        expect(x).toBeInTheDocument();
    });

    test("Course Title Component Renders", () => {
        render(<CreateCoursePage />);
        const x = screen.getByTestId("courseTitle");
        expect(x).toBeInTheDocument();
    });

    test("Course Department Component Renders", () => {
        render(<CreateCoursePage />);
        const x = screen.getByTestId("courseDepartment");
        expect(x).toBeInTheDocument();
    });

    test("Course Number Component Renders", () => {
        render(<CreateCoursePage />);
        const x = screen.getByTestId("courseNumber");
        expect(x).toBeInTheDocument();
    });

    test("Course Describtion Component Renders", () => {
        render(<CreateCoursePage />);
        const x = screen.getByTestId("courseDesc");
        expect(x).toBeInTheDocument();
    });

    test("Course CreditHours Component Renders", () => {
        render(<CreateCoursePage />);
        const x = screen.getByTestId("courseCreditHours");
        expect(x).toBeInTheDocument();
    });

    test("Course Page Submit button renders" , () => {
        render(<CreateCoursePage />);
        const x = screen.getByTestId("courseSubmitButton");
        expect(x).toBeInTheDocument();
    });
});
