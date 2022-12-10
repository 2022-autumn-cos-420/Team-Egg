import React from 'react';
import { render, screen } from "@testing-library/react";
import CourseSearch from './CourseSearch';
import { BrowserRouter } from 'react-router-dom';

import {fakeCourses} from "../testdata/courseTestData";





describe("CourseSearch Components Tests", () => {


    test("Main Containing Element renders", () => {
        render(<BrowserRouter><CourseSearch courses={[]}/></BrowserRouter>);
        const x = screen.getByTestId("CourseSearchPage");
        expect(x).toBeInTheDocument();
    });




});