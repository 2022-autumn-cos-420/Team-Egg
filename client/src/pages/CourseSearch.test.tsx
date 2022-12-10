import React from 'react';
import { render, screen } from "@testing-library/react";
import CourseSearch from './CourseSearch';
import { BrowserRouter } from 'react-router-dom';

describe("CourseSearch Components Tests", () => {
    const setup = () => render(<BrowserRouter><CourseSearch /></BrowserRouter>);;

    test("Main Containing Element renders", () => {
        setup();
        const x = screen.getByTestId("CourseSearchPage");
        expect(x).toBeInTheDocument();
    });


});