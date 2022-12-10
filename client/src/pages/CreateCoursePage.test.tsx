import React from 'react';
import { render, screen } from "@testing-library/react";
import CreateCoursePage from './CreateCoursePage';
import { BrowserRouter } from 'react-router-dom';

describe("CreateCoursePage Components Tests", () => {

    const setup = () => render(<BrowserRouter><CreateCoursePage /></BrowserRouter>);

    test("Main Containing Element renders", () => {
        setup();
        const x = screen.getByTestId("createCoursePage");
        expect(x).toBeInTheDocument();
    });

    test("Course Title Component Renders", () => {
        setup();
        const x = screen.getByTestId("courseTitle");
        expect(x).toBeInTheDocument();
    });

    test("Course Department Component Renders", () => {
        setup();
        const x = screen.getByTestId("courseDepartment");
        expect(x).toBeInTheDocument();
    });

    test("Course Number Component Renders", () => {
        setup();
        const x = screen.getByTestId("courseNumber");
        expect(x).toBeInTheDocument();
    });

    test("Course Describtion Component Renders", () => {
        setup();
        const x = screen.getByTestId("courseDesc");
        expect(x).toBeInTheDocument();
    });

    test("Course CreditHours Component Renders", () => {
        setup();
        const x = screen.getByTestId("courseCreditHours");
        expect(x).toBeInTheDocument();
    });

    test("Course Year Component Renders", () => {
        setup();
        const x = screen.getByTestId("courseYear");
        expect(x).toBeInTheDocument();
    });

    test("Course Semester Component Renders", () => {
        setup();
        const x = screen.getByTestId("courseSemester");
        expect(x).toBeInTheDocument();
    });

    test("Course Page Submit button renders" , () => {
        setup();
        const x = screen.getByTestId("courseSubmitButton");
        expect(x).toBeInTheDocument();
    });
});
