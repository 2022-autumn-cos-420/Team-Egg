import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import CourseSearch, {FetchCourseDataBase} from './CourseSearch';
import Query from "../interfaces/Query";
import Course from "../interfaces/Course";

import { BrowserRouter } from 'react-router-dom';

import {fakeCourses} from "../testdata/courseTestData";
import {query1, query2, query3} from "../testdata/queryTestData";


describe("CourseSearch Components Tests", () => {


    test("Main Containing Element renders", () => {
        render(<BrowserRouter><CourseSearch courseList={[]}/></BrowserRouter>);
        const x = screen.getByTestId("CourseSearchComponent");
        expect(x).toBeInTheDocument();
    });

    test("Number of Courses renders equal to course list length", () => {
        render(<BrowserRouter><CourseSearch courseList={fakeCourses}/></BrowserRouter>);
        const x = screen.getAllByTestId("ClickableCourse");
        expect(x).toHaveLength(fakeCourses.length);
    });

    test("No Courses Found text is shown if courseList is empty", () => {
        render(<BrowserRouter><CourseSearch courseList={[]}/></BrowserRouter>);
        const x = screen.getByText("No Courses Found");
        expect(x).toBeInTheDocument();
      });

    test("to ensure that all titles from the courseList is visisble", () => {
        render(<BrowserRouter><CourseSearch courseList={fakeCourses}/></BrowserRouter>);
        for (let i = 0; i < fakeCourses.length; i++){
            const x = screen.getByText(fakeCourses[i].title);
            expect(x).toBeInTheDocument();
        }
      });
      
      test("ReviewListPage is displayed when ClickableCourse is clicked", () => {
        const courseList = fakeCourses;
        render(<BrowserRouter><CourseSearch courseList={courseList}/></BrowserRouter>);
        const clickableCourse = screen.getByTestId("ClickableCourse");
        fireEvent.click(clickableCourse);
        const reviewListPage = screen.getByTestId("ReviewListPage");
        expect(reviewListPage).toBeInTheDocument();
      });
      
});