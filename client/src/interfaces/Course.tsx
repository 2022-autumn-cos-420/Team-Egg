import { MeetingTime } from "./MeetingTime";

export interface Course{
    title: string,
    description: string,
    creditHours: number,
    lectureTimes: MeetingTime[],
    department: string,
    courseNumber: number,
    lectureType: string,
    semester: string,
    year: number
}