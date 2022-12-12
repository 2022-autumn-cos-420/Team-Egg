import  Query  from "../interfaces/Query";

export const query1: Query = {
  field: "creditHours",
  compare: ">=",
  search: "3"
};

export const query2: Query = {
  field: "year",
  compare: "<=",
  search: "2022"
};

export const query3: Query = {
  field: "courseNumber",
  compare: "<",
  search: "500"
};

