import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import CourseSearchPage from './CourseSearchPage';
import { BrowserRouter } from 'react-router-dom';


describe("CourseSearchPage Components Tests", () => {
    const setup = () => render(<BrowserRouter><CourseSearchPage /></BrowserRouter>);

    test("Main Containing Element renders", () => {
        setup();
        const x = screen.getByTestId("CourseSearchPage");
        expect(x).toBeInTheDocument();
    });

    test("Course Search Component renders on CourseSearchPage", () =>{
        setup();
        const x = screen.getByTestId("CourseSearchComponent");
        expect(x).toBeInTheDocument();
    })
});
