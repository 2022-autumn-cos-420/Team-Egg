import Course from "../interfaces/Course";

export const fakeCourses: Course[] = [
    {
      docId: "abc",
      title: "Introduction to Computer Science",
      description: "A course that introduces students to the world of computer science and programming.",
      creditHours: 9,
      lectureTimes: [
        {
          day: "MONDAY",
          startTime: 540,
          duration: 180 // 3 hours = 3 * 60 = 180
        },
        {
          day: "WEDNESDAY",
          startTime: 540,
          duration: 180
        },
        {
          day: "FRIDAY",
          startTime: 540,
          duration: 180
        }
      ],
      department: "CSC",
      courseNumber: 101,
      lectureType: "Lecture",
      semester: "FALL",
      year: 2022
    },
    {
      docId: "abcd",
      title: "Data Structures and Algorithms",
      description: "A course that covers the fundamentals of data structures and algorithms.",
      creditHours: 4,
      lectureTimes: [
        {
          day: "TUESDAY",
          startTime: 780,
          duration: 120 // 2 hours = 2 * 60 = 120
        },
        {
          day: "THURSDAY",
          startTime: 780,
          duration: 120
        }
      ],
      department: "CSC",
      courseNumber: 201,
      lectureType: "Lecture",
      semester: "FALL",
      year: 2022
    },
    {
      docId: "bc",
      title: "Computer Architecture and Organization",
      description: "A course that covers the fundamental principles of computer architecture and organization.",
      creditHours: 3,
      lectureTimes: [
        {
          day: "MONDAY",
          startTime: 840,
          duration: 120
        },
        {
          day: "WEDNESDAY",
          startTime: 840,
          duration: 120
        },
        {
          day: "FRIDAY",
          startTime: 840,
          duration: 120
        }
      ],
      department: "CSC",
      courseNumber: 301,
      lectureType: "Lecture",
      semester: "FALL",
      year: 2022
    }
  ];
  