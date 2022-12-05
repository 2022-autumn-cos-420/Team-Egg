import { MeetingTime } from "./MeetingTime";

export interface Match {
    creditHoursAvailable: number,
    availability: MeetingTime[],
    notAvailable: boolean,
    majorTypes: string[]
    hoursOfWork: number
}