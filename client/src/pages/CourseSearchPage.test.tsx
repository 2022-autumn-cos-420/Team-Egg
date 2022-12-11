import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import CourseSearchPage, {parseQuery} from './CourseSearchPage';
import { BrowserRouter } from 'react-router-dom';
import Query from '../interfaces/Query';


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

    test("Parse Query gives back an empty list when there is no search", () => {
        const expectedResult : Query[] = [];
        const result : Query[] = parseQuery("");
        expect(result).toEqual(expectedResult);
    });

    test("Parse Query gives back the appropriate query when there's a single search paramter", () => {
        const expectedResult : Query[] = [
            {  
                field: "creditHours",
                compare: "<=",
                search: "10"
            }
        ];

        const result: Query[] = parseQuery("?ch=10");
        expect(result).toEqual(expectedResult);
    });
    test("Parse Query gives back the appropriate query list when there's several departments and credit hours", () => {
        const expectedResult : Query[] = [
            {  
                field: "department",
                compare: "==",
                search: "COS"
            },
            {  
                field: "department",
                compare: "==",
                search: "PHY"
            },
            {  
                field: "department",
                compare: "==",
                search: "CHY"
            },
            {  
                field: "creditHours",
                compare: "<=",
                search: "4"
            }
        ];

        const result: Query[] = parseQuery("?majors=COS,PHY,CHY&ch=4");
        expect(result).toEqual(expectedResult);
    });
});
